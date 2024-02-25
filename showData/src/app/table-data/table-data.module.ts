import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDataRoutingModule } from './table-data-routing.module';
import { LoadModuleComponent } from './load-module/load-module.component';
import { ShaowTableComponent } from './shaow-table/shaow-table.component';
import { ShareModelModule } from '../CommanFile/share-model/share-model.module';


@NgModule({
  declarations: [
    LoadModuleComponent,
    ShaowTableComponent
  ],
  imports: [
    CommonModule,
    TableDataRoutingModule,
    ShareModelModule
  ]
})
export class TableDataModule { }
