import { Component } from '@angular/core';
import { AppoloDataService } from './services/appolo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tableData: any;

  constructor( private ds: AppoloDataService ) {
    this.ds.getData().subscribe( (res) => {
      this.tableData = res.data;
    });
  }
}
