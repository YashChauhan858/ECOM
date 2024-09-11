/**
 * Redis acts as a in memory data store and improves
 * 1. Re-query
 * 2. Request timing
 * This file spins up a redis server and connects to it.
 * default port: 6379
 */

import Redis from "ioredis";

export default class RedisConnection {
  static instance: Redis | null = null;

  static init(): Redis {
    if (RedisConnection.instance) return RedisConnection.instance;

    RedisConnection.instance = new Redis();

    RedisConnection.instance.on("connect", () => {
      console.log("Redis connected");
    });

    return RedisConnection.instance;
  }

  static async fetchFromCache(key: string) {
    if (!key) return null;
    if (!RedisConnection.instance) RedisConnection.init();

    try {
      const data = await RedisConnection?.instance?.get(key);
      if (!data) return null;
      return data;
    } catch (error) {
      return null;
    }
  }

  static async storeData(
    key: string,
    value: any,
    exp: number | undefined = undefined
  ) {
    if (!key || !value) return null;
    if (!RedisConnection.instance) RedisConnection.init();
    try {
      await RedisConnection?.instance?.set(key, JSON.stringify(value));
      if (exp) await RedisConnection?.instance?.expire(key, exp);
      return true;
    } catch (error) {
      return null;
    }
  }
}
