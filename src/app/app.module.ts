import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Gallery1Directive } from './gallery1.directive';
import { IntroComponent } from './intro/intro.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { Collection1Component } from './collection1/collection1.component';
import { Collection2Component } from './collection2/collection2.component';
import { Collection3Component } from './collection3/collection3.component';
import { Collection4Component } from './collection4/collection4.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MyCompComponent,
    Gallery1Directive,
    Collection1Component,
    Collection2Component,
    Collection3Component,
    Collection4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
