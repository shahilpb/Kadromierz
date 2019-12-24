/**
 * @file index
 * @author Peerbits
 */

import { server } from './app';
// import { config } from "./config";
import { log } from './services';

server.listen(3000, () => {
  log.info(`server started on Port 3000`);
});
