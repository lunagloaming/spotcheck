import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LandingPage } from "./landing/landing.page";

const pages = [
    LandingPage
]

@NgModule({
  declarations: pages,
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
  ],
  exports: pages
})
export class PageModule { }