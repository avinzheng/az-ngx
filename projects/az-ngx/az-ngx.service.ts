import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface AzConfig {
  baseHref?: `${string}/`;
  apiBase?: `${string}/`;
  assetsBase?: `${string}/`;
}

export const AZ_CONFIG = new InjectionToken('az.config');

@Injectable({
  providedIn: 'root'
})
export class AzNgxService {
  private readonly azConfigDefault: AzConfig = {
    baseHref: '/',
    apiBase: 'api/',
    assetsBase: 'assets/'
  };
  config: AzConfig;

  constructor(@Optional() @Inject(AZ_CONFIG) private azConfig?: AzConfig) {
    this.config = Object.assign({}, this.azConfigDefault, azConfig);
  }
}
