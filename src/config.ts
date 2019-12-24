import envalid from 'envalid';

interface IConfig {
  NODE_ENV: string;
  LOG_LEVEL: string;
}

interface IEnvalidConfig {
  isProd: boolean;
  isDev: boolean;
  isTest: boolean;
  // PORT: number
}

export const config: Readonly<IConfig & IEnvalidConfig> = envalid.cleanEnv<
  IConfig
>(process.env, {
  NODE_ENV: envalid.str({ choices: ['production', 'test', 'development'] }),
  LOG_LEVEL: envalid.str({
    default: 'error',
    choices: [
      'emerg',
      'alert',
      'crit',
      'error',
      'warning',
      'notice',
      'info',
      'debug'
    ]
  })
});
