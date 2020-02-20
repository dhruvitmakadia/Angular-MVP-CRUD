import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { DirectiveContainer } from './directive-container/directive-container';
import { PipeContainer } from './pipe-container/pipe-container';
import { DirectivePresentation } from './directive-container/directive-presentation/directive-presentation';
import { PipePresentation } from './pipe-container/pipe-presentation/pipe-presentation';

import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { SortDirective } from './directives/sort.directive';
import { EmojiPipe } from './pipes/emoji.pipe';
import { FormsModule } from '@angular/forms';
import { PluralPipe } from './pipes/plural.pipe';

@NgModule({
  declarations: [
    DynamicComponent,
    DirectiveContainer,
    PipeContainer,
    DirectivePresentation,
    PipePresentation,
    SortDirective,
    EmojiPipe,
    PluralPipe
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    PortalModule,
    OverlayModule,
    FormsModule
  ],
  entryComponents: [
    DirectiveContainer,
    PipeContainer
  ]
})
export class DynamicModule { }
