import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ModalModule,
  ButtonsModule,
  TooltipModule,
  BsDropdownModule,
  ProgressbarModule,
  AlertModule,
  TabsModule,
  AccordionModule,
  CarouselModule,
  PopoverModule,
  TypeaheadModule 
} from "ngx-bootstrap";


@NgModule({
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    ModalModule,
    ButtonsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,
    AlertModule,
    TabsModule,
    AccordionModule,
    CarouselModule,
    TypeaheadModule
  ],
  declarations: []
})
export class BootstrapModule {}
