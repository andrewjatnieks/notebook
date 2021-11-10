import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormBuilder, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotePagesComponent } from './components/note-pages/note-pages.component';
import { PagesViewComponent } from './components/pages-view/pages-view.component';
import { PageComponent } from './components/page/page.component';
import {HttpClientModule} from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    NotePagesComponent,
    PagesViewComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
