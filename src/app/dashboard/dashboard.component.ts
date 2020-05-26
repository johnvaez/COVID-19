import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  covid19: any[];

  constructor(
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    this.getCovid19();
  }

  getCovid19() {
    this.covidService.getCovid19().subscribe(data => {
       this.covid19 = data;
    });
  }

}
