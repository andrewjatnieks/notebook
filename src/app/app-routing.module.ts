import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotePagesComponent } from './components/note-pages/note-pages.component';
import { PagesViewComponent } from './components/pages-view/pages-view.component';

const routes: Routes = [
  {path: '', component: PagesViewComponent, 
    children: [{
      path: '', component: NotePagesComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
