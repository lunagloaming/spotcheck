import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from '../component/root/root.component';
import { ComponentModule } from '../component/component.module';
import { PageModule } from '../page/page.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    PageModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
