import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy, TemplateRef
} from '@angular/core';
import { DirectiveContainer } from '../directive-container/directive-container';
import { PipeContainer } from '../pipe-container/pipe-container';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, OnDestroy {

  @ViewChild('directive', { read: ViewContainerRef, static: true }) directiveContent: ViewContainerRef;

  componentRef: ComponentRef<DirectiveContainer>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<PipeContainer>;
  nextPosition: number;

  constructor(private resolver: ComponentFactoryResolver, private overlay: Overlay) {
  }

  ngOnInit() {

  }

  createDirective() {
    this.directiveContent.clear();
    const factoryComponent = this.resolver.resolveComponentFactory(DirectiveContainer);
    this.componentRef = this.directiveContent.createComponent(factoryComponent);
  }

  createPipe() {
    this.directiveContent.clear();
    this.componentPortal = new ComponentPortal(PipeContainer);
    this.selectedPortal = this.componentPortal;
  }

  createOverlay() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);
    const pipePortal = new ComponentPortal(PipeContainer);
    overlayRef.attach(pipePortal);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
