import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path:"",component:LoadingComponent},
  {path:"mode", loadChildren:()=>import('./table-data/table-data.module').then(mode=>mode.TableDataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
