import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { localSecrets } from '../../environments/.env.local'; // Importando as chaves locais

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${environment.weatherApiUrl}weather?q=${city}&appid=${localSecrets.weatherApiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }

  getForecast(city: string): Observable<any> {
    const url = `${environment.weatherApiUrl}forecast?q=${city}&appid=${localSecrets.weatherApiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }

}
