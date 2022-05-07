import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHomeComponentComponent } from './components/angular-home-component/angular-home-component.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@NgModule({
  declarations: [AppComponent, AngularHomeComponentComponent, TranslatePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
