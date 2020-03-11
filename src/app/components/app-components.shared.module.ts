import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from '../jss-graphql.module';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
  This module is imported by the generated app-components.module.ts.
  You can use this module to provide shared Angular components that are not
  JSS components, etc to the generated module.

  Don't want code generation? See ./.gitignore for instructions to turn it off.
*/
@NgModule({
  imports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    GraphQLModule,
    JssModule,
    FormsModule,
  ],
  exports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    GraphQLModule,
    FormsModule,
  ],
  declarations: [
  ],
})
export class AppComponentsSharedModule { }
