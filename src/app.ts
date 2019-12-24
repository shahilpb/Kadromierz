/**
 * @file app
 * @author Peerbits
 */

import cors from '@koa/cors';
import http from 'http';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import mount from 'koa-mount';

import connect from './connect';
import { v1 } from './v1';

export const app = new Koa();
connect({ db: 'mongodb://localhost:27017/tenna' });

app.proxy = true;

app.use(
  cors({
    allowMethods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
);
app.use(compress());
app.use(bodyParser());
app.use(helmet());

app.use(mount('/v1', v1()));

export const server = http.createServer(app.callback());
