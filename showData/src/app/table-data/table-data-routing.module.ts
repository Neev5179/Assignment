import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadModuleComponent } from './load-module/load-module.component';
import { ShaowTableComponent } from './shaow-table/shaow-table.component';

const routes: Routes = [

{path:"",component:LoadModuleComponent},
{path:"show",component:ShaowTableComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDataRoutingModule { }
