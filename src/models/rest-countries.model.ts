import {model} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - RestCountries
 * RestCountries
 */
@model({name: 'RestCountries'})
export class RestCountries {
  constructor(data?: Partial<RestCountries>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

}

export interface RestCountriesRelations {
  // describe navigational properties here
}

export type RestCountriesWithRelations = RestCountries & RestCountriesRelations;


