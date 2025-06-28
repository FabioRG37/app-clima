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
          console.log(dados);
        },
        error: (err) => {
          console.error('Erro ao buscar clima. Verifique o nome da cidade:', err);
          this.clima = null;
        }
      });

    // Aqui depois chamaremos o serviço de clima
  }
}
