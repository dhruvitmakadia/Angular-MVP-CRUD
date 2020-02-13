import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  declarations: [AutofocusDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AutofocusDirective
  ]
})
export class SharedModule { }
