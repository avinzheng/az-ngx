import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

import { AzConfig, AzNgxService } from 'az-ngx';
import { AuthServiceModule } from './auth-service.module';

export interface AzAuthConfig extends AzConfig {
  loginRouterLink?: `/${string}`;
}

export const AZ_AUTH_CONFIG = new InjectionToken('az.auth.config');

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthService {
  private readonly azAuthConfigDefault: AzAuthConfig = {
    loginRouterLink: '/login'
  };
  config: AzAuthConfig;

  constructor(
    private azNgxService: AzNgxService,
    @Optional() @Inject(AZ_AUTH_CONFIG) private azAuthConfig: AzAuthConfig
  ) {
    this.config = Object.assign(
      {},
      this.azAuthConfigDefault,
      this.azNgxService.config,
      azAuthConfig
    );
  }
}
