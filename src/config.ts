import envalid from 'envalid';

/**
 * Configuration given by the env to the app.
 */
interface IConfig {
  NODE_ENV: string;
  ENV: string;
  PORT: number;
  FRONTEND_URL: string;
  DATABASE_URL: string;
  LOG_LEVEL: string;
}

interface IEnvalidConfig {
  isProd: boolean;
  isDev: boolean;
  isTest: boolean;
}

/**
 * Configuration of the SEM API.
 */
export type KadroConfig = Readonly<IConfig & IEnvalidConfig>;

export const config: KadroConfig = envalid.cleanEnv<IConfig>(process.env, {
  NODE_ENV: envalid.str({ choices: ['production', 'test', 'development'] }),
  ENV: envalid.str({
    default: 'development',
    choices: ['production', 'staging', 'development']
  }),
  PORT: envalid.port(),
  FRONTEND_URL: envalid.url(),
  DATABASE_URL: envalid.url(),
  LOG_LEVEL: envalid.str({
    default: 'error',
    choices: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly']
  })
});
