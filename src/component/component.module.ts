import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RootComponent } from "./root/root.component";
import { AppRoutingModule } from "../app/app-routing.module";

const components = [
    RootComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
  ],
  exports: components
})
export class ComponentModule { }