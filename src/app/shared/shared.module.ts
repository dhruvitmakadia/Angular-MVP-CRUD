import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';


@NgModule({
  declarations: [AutofocusDirective, NumberOnlyDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AutofocusDirective,
    NumberOnlyDirective
  ]
})
export class SharedModule { }
