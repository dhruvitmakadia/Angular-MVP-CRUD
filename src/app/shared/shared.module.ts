import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutofocusDirective } from './directives/autofocus.directive';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    AutofocusDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AutofocusDirective
  ]
})
export class SharedModule { }
