import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-article-cta',
  templateUrl: './article-cta.component.html',
  styleUrls: ['./article-cta.component.css']
})
export class ArticleCtaComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('ArticleCta component initialized with component data', this.rendering);
  }
}
