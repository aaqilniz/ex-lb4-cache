import {cache} from 'loopback-api-cache';
import {api, operation, param, requestBody} from '@loopback/rest';
import {inject} from '@loopback/core';
import {OpenApiService} from '../services';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      RestCountries: {
        type: 'object',
      },
    },
  },
  paths: {},
})
export class OpenApiController {
  constructor(@inject('services.OpenApiService')
  protected openApiService: OpenApiService) {}

  /**
   *
   *
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/all', {
  operationId: 'getAllCountries',
  parameters: [
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getAllCountries default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getAllCountries(@param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getAllCountries(fields);
  }

  /**
   *
   *
   * @param alphacode 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/alpha/{alphacode}', {
  operationId: 'getByAlpha',
  parameters: [
    {
      name: 'alphacode',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByAlpha default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByAlpha(@param({
  name: 'alphacode',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) alphacode: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByAlpha(alphacode, fields);
  }

  /**
   *
   *
   * @param codes 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/alpha/', {
  operationId: 'getByAlphaList',
  parameters: [
    {
      name: 'codes',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByAlphaList default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByAlphaList(@param({
  name: 'codes',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) codes: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByAlphaList(codes, fields);
  }

  /**
   *
   *
   * @param currency 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/currency/{currency}', {
  operationId: 'getByCurrency',
  parameters: [
    {
      name: 'currency',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByCurrency default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByCurrency(@param({
  name: 'currency',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) currency: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByCurrency(currency, fields);
  }

  /**
   *
   *
   * @param name 
   * @param fullText 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/name/{name}', {
  operationId: 'getByName',
  parameters: [
    {
      name: 'name',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fullText',
      in: 'query',
      required: true,
      schema: {
        type: 'boolean',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByName default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByName(@param({
  name: 'name',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) name: string, @param({
  name: 'fullText',
  in: 'query',
  required: true,
  schema: {
    type: 'boolean',
  },
}) fullText: boolean, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByName(name, fullText, fields);
  }

  /**
   *
   *
   * @param capital 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/capital/{capital}', {
  operationId: 'getByCapital',
  parameters: [
    {
      name: 'capital',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByCapital default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByCapital(@param({
  name: 'capital',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) capital: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByCapital(capital, fields);
  }

  /**
   *
   *
   * @param region 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/region/{region}', {
  operationId: 'getByContinent',
  parameters: [
    {
      name: 'region',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByContinent default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByContinent(@param({
  name: 'region',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) region: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByContinent(region, fields);
  }

  /**
   *
   *
   * @param subregion 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/subregion/{subregion}', {
  operationId: 'getBySubRegion',
  parameters: [
    {
      name: 'subregion',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getBySubRegion default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getBySubRegion(@param({
  name: 'subregion',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) subregion: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getBySubRegion(subregion, fields);
  }

  /**
   *
   *
   * @param lang 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/lang/{lang}', {
  operationId: 'getByLanguage',
  parameters: [
    {
      name: 'lang',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByLanguage default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByLanguage(@param({
  name: 'lang',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) lang: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByLanguage(lang, fields);
  }

  /**
   *
   *
   * @param demonym 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/demonym/{demonym}', {
  operationId: 'getByDemonym',
  parameters: [
    {
      name: 'demonym',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByDemonym default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByDemonym(@param({
  name: 'demonym',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) demonym: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByDemonym(demonym, fields);
  }

  /**
   *
   *
   * @param translation 
   * @param fields 
   */
  @cache(60)
@operation('get', '/v3.1/translation/{translation}', {
  operationId: 'getByTranslation',
  parameters: [
    {
      name: 'translation',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    },
    {
      name: 'fields',
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    },
  ],
  responses: {
    default: {
      description: 'getByTranslation default response',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RestCountries',
          },
        },
      },
    },
  },
})
  async getByTranslation(@param({
  name: 'translation',
  in: 'path',
  required: true,
  schema: {
    type: 'string',
  },
}) translation: string, @param({
  name: 'fields',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
  },
}) fields: string): Promise<unknown> {
    return this.openApiService.getByTranslation(translation, fields);
  }

}

