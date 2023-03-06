import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';


/**
 * The service interface is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 */
export interface OpenApiService {
  /**
   * @param fields 
   */
  getAllCountries(fields: string): Promise<unknown>;

  /**
   * @param alphacode 
   * @param fields 
   */
  getByAlpha(alphacode: string, fields: string): Promise<unknown>;

  /**
   * @param codes 
   * @param fields 
   */
  getByAlphaList(codes: string, fields: string): Promise<unknown>;

  /**
   * @param currency 
   * @param fields 
   */
  getByCurrency(currency: string, fields: string): Promise<unknown>;

  /**
   * @param name 
   * @param fullText 
   * @param fields 
   */
  getByName(name: string, fullText: boolean, fields: string): Promise<unknown>;

  /**
   * @param capital 
   * @param fields 
   */
  getByCapital(capital: string, fields: string): Promise<unknown>;

  /**
   * @param region 
   * @param fields 
   */
  getByContinent(region: string, fields: string): Promise<unknown>;

  /**
   * @param subregion 
   * @param fields 
   */
  getBySubRegion(subregion: string, fields: string): Promise<unknown>;

  /**
   * @param lang 
   * @param fields 
   */
  getByLanguage(lang: string, fields: string): Promise<unknown>;

  /**
   * @param demonym 
   * @param fields 
   */
  getByDemonym(demonym: string, fields: string): Promise<unknown>;

  /**
   * @param translation 
   * @param fields 
   */
  getByTranslation(translation: string, fields: string): Promise<unknown>;

}

export class OpenApiServiceProvider implements Provider<OpenApiService> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  async value(): Promise<OpenApiService> {
    const service = await getService<{apis: {'default': OpenApiService}}>(
      this.dataSource,
    );
    return service.apis['default'];
  }
}
