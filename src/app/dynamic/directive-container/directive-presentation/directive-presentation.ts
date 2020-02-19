import { Component, OnInit } from '@angular/core';
import { DirectivePresenter } from '../directive-presenter/directive-presenter';

@Component({
  selector: 'app-directive-ui',
  templateUrl: './directive-presentation.html',
  styleUrls: ['./directive-presentation.scss'],
  viewProviders: [DirectivePresenter]
})
export class DirectivePresentation implements OnInit {

  reverse: boolean;
  key: string;
  constructor() {
    this.reverse = true;
    this.key = 'Full Name';
  }

  ngOnInit() {
  }

  public sortData(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
