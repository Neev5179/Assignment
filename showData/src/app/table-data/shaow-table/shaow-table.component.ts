import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { ServiceService } from 'src/app/CommanFile/service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shaow-table',
  templateUrl: './shaow-table.component.html',
  styleUrls: ['./shaow-table.component.scss']
})
export class ShaowTableComponent {
  dataSource = new MatTableDataSource<any>([]);

  heading = ["id", "brand", "category", "description", "title", "stock"];

  constructor(private serviceService: ServiceService ,private cdr: ChangeDetectorRef,
     private zone: NgZone) {}

  ngOnInit() {
    console.log("calling...........");
    
    this.fetchData();
  }
  
  fetchData() {
    this.serviceService.getProducts().subscribe((res: any) => {
      console.log("responce",res);
      
      this.dataSource.data = res;
            console.log("data is::",this.dataSource);
      this.cdr.detectChanges();
    });
  }
}

 
  



