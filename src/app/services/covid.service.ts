import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

   //URL de la API
   URL_API = 'https://api.covid19api.com/summary';
   URL_API_DETAILS = 'https://api.covid19api.com/dayone/country/';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Obtener covid 19
  getCovid19(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  //Obtener covid 19
  getCountrieDetails(CountryCode): Observable<any> {
    return this.http.get<any>(this.URL_API_DETAILS+CountryCode)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  


   // Manejo de errores
   errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Obtener error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Obtener error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
