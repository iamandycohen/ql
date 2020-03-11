import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-article-stack',
  templateUrl: './article-stack.component.html',
  styleUrls: ['./article-stack.component.css']
})
export class ArticleStackComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('ArticleStack component initialized with component data', this.rendering);
  }
}
