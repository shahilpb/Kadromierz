/**
 * @file index
 * @copyright peerbits
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

import { server } from './app';
import { config } from './config';
import { log } from './services';

server.listen(config.PORT, () => {
  log.info(`server started on port ${config.PORT}`);
});
