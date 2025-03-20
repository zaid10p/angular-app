import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { UserInputComponent } from './app/user-input/user-input.component';
import { InvResultsComponent } from './app/inv-results/inv-results.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvResultsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
