import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MyCompComponent } from './my-comp/my-comp.component';

const routes: Routes = [
  {path:'intro', component:IntroComponent},
  {path:'my-comp', component:MyCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

