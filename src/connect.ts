import mongoose from 'mongoose';

import { log } from './services';

export default ({ db }: { db: string }) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        return log.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        log.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
