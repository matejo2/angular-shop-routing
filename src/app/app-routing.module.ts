import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {SecondComponent} from './second/second.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'second', component: SecondComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
