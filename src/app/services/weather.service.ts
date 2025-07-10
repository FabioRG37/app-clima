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

  getPrevisaoFiltrada(city: string): Observable<any[]> {
    const url = `${environment.weatherApiUrl}forecast?q=${city}&appid=${localSecrets.weatherApiKey}&units=metric&lang=pt_br`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        const hoje = new Date();
        const dataHoje = hoje.toISOString().split('T')[0];

        // filtrar apenas um horário por dia (ex: 12:00:00) e excluir o dia atual
        const previsoes = response.list.filter((item: any) => {
          const data = item.dt_txt.split(' ')[0];
          const hora = item.dt_txt.split(' ')[1];
          return data !== dataHoje && hora === '15:00:00';
        });

        return previsoes.slice(0, 7); // limitar a 7 dias
      })
    );
  }

}
