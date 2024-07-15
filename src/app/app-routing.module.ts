import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtachesComponent } from './addtaches/addtaches.component';
import { TachesComponent } from './taches/taches.component';

const routes: Routes = [
  {path:'',redirectTo:'taches',pathMatch:'full'},
  {path:'taches',component:TachesComponent},
  {path:'add',component:AddtachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
