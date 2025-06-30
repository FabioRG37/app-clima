import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { localSecrets } from 'src/environments/.env.local';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cidade: string = '';
  erro: string = '';
  clima: any = null;
  previsao: any[] = [];

  constructor(
    private weatherService: WeatherService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Verifica se o navegador suporta geolocalização
    this.buscarLocalizacao();
  }


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

  buscarLocalizacao() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("Localização detectada:", pos.coords);
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          this.buscarCidadePorCoordenadas(lat, lon);
        },
        (err) => {
          console.warn("Permissão de localização negada", err);
        }
      );
    } else {
      console.warn("Geolocalização não suportada");
    }
  }

  buscarCidadePorCoordenadas(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${localSecrets.weatherApiKey}&lang=pt_br&units=metric`;

    this.http.get(url).subscribe({
      next: (dados: any) => {
        this.cidade = dados.name;
        this.buscarClima(); // já busca o clima da cidade detectada
      },
      error: (err) => {
        console.error('Erro ao obter cidade por coordenadas:', err);
      }
    });
  }
}
