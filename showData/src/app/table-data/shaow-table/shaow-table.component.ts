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
  // columnsToDisplay: string[] = this.heading.slice()
 
  heading: string[]= ["id", "brand", "category", "description", "title", "stock"];
  addColume=this.heading.slice();
  serarchText:any
  constructor(private serviceService: ServiceService ,private cdr: ChangeDetectorRef,
   ) {}
  //  private zone: NgZone
  ngOnInit() {
    console.log("calling...........");
    
    // this.fetchData();
  }
  
  fetchData() {
    this.serviceService.getProducts().subscribe((res: any) => {
      console.log("responce",res);
    
        this.dataSource.data = res.products;
      
      
      // this.cdr.detectChanges();
    });
  }
  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.heading.length);
    this.addColume.push(this.heading[randomColumn]);
    alert("add colums.............!")
  }

  removeColumn() {
    if (this.addColume.length) {
      this.addColume.pop();
      alert("remove colums.............!")
    }
  }
}

 
  



