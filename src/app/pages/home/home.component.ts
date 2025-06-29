import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cidade: string = '';
  erro: string = '';
  clima: any = null;
  previsao: any[] = [];

  constructor(private weatherService: WeatherService) {}

  buscarClima() {
    if (!this.cidade.trim()) {
      this.erro = 'Informe uma cidade válida.';
      this.clima = null;
      return;
    }

    this.erro = '';
    // console.log('Buscar clima para:', this.cidade);
    this.weatherService.getCurrentWeather(this.cidade)
      .subscribe({
        next: (dados) => {
          this.clima = dados;
        },
        error: (err) => {
          console.error('Erro ao buscar clima. Verifique o nome da cidade:', err);
          this.erro = 'Erro ao buscar clima.';
          this.clima = null;
        }
      });

    this.weatherService.getForecast(this.cidade)
      .subscribe({
        next: (dados) => {
          this.previsao = dados.list.filter((item: any) => item.dt_txt.includes('12:00:00'));
        },
        error: (err) => {
          this.previsao = [];
        }
      });
  }
}
