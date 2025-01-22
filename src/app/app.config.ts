import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthinterceptorService } from './services/authinterceptor.service';


export const appConfig: ApplicationConfig = {
  providers: [ provideAnimationsAsync(),provideAnimations(),provideToastr(),
    providePrimeNG({ 
        theme: {
            preset: Aura
        }
    }),provideHttpClient(withInterceptorsFromDi()),importProvidersFrom([BrowserAnimationsModule]),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
    ,{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthinterceptorService,
        multi: true,
      },]
};

