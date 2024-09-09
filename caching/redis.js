/**
 * Redis acts as a in memory data store and improves
 * 1. Re-query
 * 2. Request timing
 * This file spins up a redis server and connects to it.
 * default port: 6379
 */

import Redis from "ioredis";

export default class RedisConnection {
  instance = null;

  static init() {
    if (this.instance) return this.instance;

    this.instance = new Redis();

    this.instance.on("connect", () => {
      console.log("Redis connected");
    });

    return this.instance;
  }

  static async fetchFromCache(key) {
    if (!key) return null;
    if (!this.instance) RedisConnection.init();

    try {
      const data = await this?.instance?.get(key);
      if (!data) return null;
      return data;
    } catch (error) {
      return null;
    }
  }

  static async storeData(key, value, exp = undefined) {
    if (!key || !value) return null;
    if (!this.instance) RedisConnection.init();
    try {
      await this?.instance?.set(key, JSON.stringify(value));
      if (exp) await this?.instance?.expire(key, exp);
    } catch (error) {
      return null;
    }
  }
}
