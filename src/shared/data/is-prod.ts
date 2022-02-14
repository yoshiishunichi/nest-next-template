import * as dotenv from 'dotenv';

dotenv.config();

const nodeEnv = process.env.NODE_ENV ?? 'development';

export const isProd = nodeEnv === 'production' ? true : false;
export const baseUrl = isProd
  ? process.env.BASE_URL_PROD
  : process.env.BASE_URL_DEV;
