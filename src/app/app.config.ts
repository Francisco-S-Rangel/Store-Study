import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { groupListReducer } from './modules/store/group-list-store/group-list.reducer';
import { groupListKey } from './modules/store/group-list-store/group-list.selector';
import { provideEffects } from '@ngrx/effects';
import { GroupListEffects } from './modules/store/group-list-store/group-list.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
        [groupListKey]: groupListReducer
    }),
    provideEffects(GroupListEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
