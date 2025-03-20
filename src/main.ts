// import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
