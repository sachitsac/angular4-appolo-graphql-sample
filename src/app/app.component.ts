import { Component, OnInit } from '@angular/core';
import { AppoloDataService } from './services/appolo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tableData: any;
  loading: boolean;

  constructor( private ds: AppoloDataService ) {}

  ngOnInit() {
    this.loading = true;
    this.ds.getData().subscribe( (res) => {
      this.tableData = res.data;
      this.loading = false;
    });
  }
}
