/**
 * Redis acts as a in memory data store and improves
 * 1. Re-query
 * 2. Request timing
 * This file spins up a redis server and connects to it.
 * default port: 6379
 */

import Redis from "ioredis";

const redisClient = new Redis();

redisClient.on("connect", () => {
  console.log("Redis connected");
});

// We will use string data structure
export const fetchFromCache = async (key) => {
  if (!key) return null;
  try {
    const data = await redisClient.get(key);
    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

/**
 *
 * @param {String} key - key to store
 * @param {Object} value - object to store
 * @param {number | undefined} exp - expiry time in seconds
 * @returns
 */
export const storeData = async (key, value, exp = undefined) => {
  if (!key || !value) return null;
  try {
    await redisClient.set(key, JSON.stringify(value));
    if (exp) await redisClient.expire(key, exp);
  } catch (error) {
    return null;
  }
};
