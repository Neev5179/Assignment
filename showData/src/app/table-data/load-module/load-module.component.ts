import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-module',
  templateUrl: './load-module.component.html',
  styleUrls: ['./load-module.component.scss']
})
export class LoadModuleComponent {


  constructor(private router:Router){}

  showtable(){
    this.router.navigateByUrl("mode/show");
  }
}
