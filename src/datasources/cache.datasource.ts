import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'cache',
  connector: 'kv-redis',
  sharedData: {},
  forwardErrorToEnvironment: false,
  skipLocalCache: true,
  _: [],
  c: '{"name":"cache","connector":"kv-redis","url":"","host":"127.0.0.1","port":"6379", "user": "root", "password": "","db":"0"}',
  y: true,
  initialGenerator: true,
  resolved: '/home/aaqilniz/.npm-global/lib/node_modules/@aaqilniz/cli-updated/generators/datasource/index.js',
  namespace: 'loopback4:datasource',
  'skip-cache': false,
  'skip-install': false,
  'force-install': false,
  'ask-answered': false,
  config: '{"name":"cache","connector":"kv-redis","url":"","host":"127.0.0.1","port":"6379", "user": "root", "password": "","db":"0"}',
  yes: true,
  url: '',
  host: '127.0.0.1',
  port: 6379,
  user: 'root',
  password: '',
  db: 0
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CacheDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cache';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cache', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
