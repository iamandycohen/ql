import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-centered-column',
  templateUrl: './centered-column.component.html',
  styleUrls: ['./centered-column.component.css']
})
export class CenteredColumnComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('CenteredColumn component initialized with component data', this.rendering);
  }
}
