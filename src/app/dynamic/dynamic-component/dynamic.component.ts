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

  // Get reference from tamplate
  @ViewChild('directive', { read: ViewContainerRef, static: true }) directiveContent: ViewContainerRef;

  // Component reference of Directive container
  private componentRef: ComponentRef<DirectiveContainer>;
  // Component portal for Pipe container
  public componentPortal: ComponentPortal<DirectiveContainer>;

  constructor(private resolver: ComponentFactoryResolver, private overlay: Overlay) {
  }

  ngOnInit() {

  }

  public createDirective() {
    this.directiveContent.clear();
    const factoryComponent = this.resolver.resolveComponentFactory(DirectiveContainer);
    this.componentRef = this.directiveContent.createComponent(factoryComponent);
  }

  public createPipe() {
    this.directiveContent.clear();
    this.componentPortal = new ComponentPortal(PipeContainer);
  }

  public createOverlay() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);
    const portal = new ComponentPortal(DirectiveContainer);
    overlayRef.attach(portal);

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
