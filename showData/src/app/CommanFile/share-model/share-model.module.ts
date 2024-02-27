import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
  ]
})
export class ShareModelModule { }
