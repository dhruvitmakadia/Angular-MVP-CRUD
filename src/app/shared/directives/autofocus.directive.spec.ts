import { AutofocusDirective } from './autofocus.directive';

describe('AutofocusDirective', () => {
  it('should create an instance', () => {
    const element = {
      nativeElement: document.createElement('div')
    };
    const directive = new AutofocusDirective(element);
    expect(directive).toBeTruthy();
  });
});
