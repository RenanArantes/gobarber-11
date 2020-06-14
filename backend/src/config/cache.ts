import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: string;

  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: process.env.CACHE_DRIVER,

  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD || undefined,
    },
  },
} as ICacheConfig;
