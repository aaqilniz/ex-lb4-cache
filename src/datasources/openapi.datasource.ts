import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';

const config = {
  name: 'openapi',
  connector: 'openapi',
  spec: 'openapi.yml',
  validate: false,
  positional: 'bodyLast',
};

@lifeCycleObserver('datasource')
export class OpenapiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'openapi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.openapi', {optional: true})
    dsConfig: object = config,
  ) {
    super({transformResponse, ...dsConfig});
  }
}

/**
 * Transform the http response into the return value
 */
function transformResponse(response: {
  url: string,
  method: string,
  status: number,
  statusText: string,
  headers: object,
  text: string,
  body: unknown,
}) {
  if (response.status < 400) {
    return response.body ?? response.text;
  }
  const err = HttpErrors(response.status, response.statusText, response);
  throw err;
}
