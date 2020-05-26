import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrie-details',
  templateUrl: './countrie-details.component.html',
  styleUrls: ['./countrie-details.component.css']
})
export class CountrieDetailsComponent implements OnInit {

  covid19: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private covidService : CovidService
  ) { }

  ngOnInit(): void {
    //Obtenemos el parametro de la URL
    let CountryCode = this.activatedRoute.snapshot.paramMap.get('CountryCode');
    this.getCountrieDetails(CountryCode);
  }

  getCountrieDetails(CountryCode) {
    this.covidService.getCountrieDetails(CountryCode).subscribe(data => {
      this.covid19 = data;
    });
  }

}
