import { ApplicationConfig } from '@angular/core';

import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

const logInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const clonereq = req.clone({
    headers: req.headers.set('Auth', 'testtoken'),
  });
  console.log('clonereq', clonereq);
  return next(clonereq).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log('RESPONSE', event.status, event.body);
        }
      },
    })
  );
};
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([logInterceptor]))],
};
