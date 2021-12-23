import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ AngularFireModule } from '@angular/fire';
import{ AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';
import{ AngularFirestoreModule } from '@angular/fire/firestore';

import{ AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
