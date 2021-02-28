import { ModuleWithProviders, NgModule } from '@angular/core';
import { AZ_CONFIG, AzConfig } from './az-ngx.service';

@NgModule()
export class AzNgxModule {
  static forRoot(config: AzConfig): ModuleWithProviders<AzNgxModule> {
    return {
      ngModule: AzNgxModule,
      providers: [
        { provide: AZ_CONFIG, useValue: config }
      ]
    };
  }
}
