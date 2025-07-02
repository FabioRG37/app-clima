import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { localSecrets } from 'src/environments/.env.local';
import { Geolocation } from '@capacitor/geolocation';

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
  temaEscuroAtivo = false;

  constructor(
    private weatherService: WeatherService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Verifica se o navegador suporta geolocalização
    this.buscarLocalizacao();

    // Verifica o tema salvo no localStorage e aplica o tema escuro se necessário
    const temaSalvo = localStorage.getItem('tema');
    this.temaEscuroAtivo = temaSalvo === 'escuro';
    localStorage.setItem('tema', this.temaEscuroAtivo ? 'escuro' : 'claro');
  }

  alternarTema() {
    this.temaEscuroAtivo = !this.temaEscuroAtivo;
    document.documentElement.classList.toggle('dark', this.temaEscuroAtivo);
    localStorage.setItem('tema', this.temaEscuroAtivo ? 'escuro' : 'claro');
  }


  async buscarLocalizacao() {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log('Localização detectada:', position.coords);
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.buscarCidadePorCoordenadas(lat, lon);
    } catch (error) {
      console.warn('Erro ao obter localização:', error);
    }
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
          this.clima = {
            ...dados,
            iconeUrl: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
          };
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
          const diasUnicos: any[] = [];
          const datasAdicionadas = new Set();

          for (const item of dados.list) {
            const data = this.formatarData(item.dt_txt.split(' ')[0]);

            if (!datasAdicionadas.has(data)) {
              datasAdicionadas.add(data);
              diasUnicos.push({
                data,
                temperatura: item.main.temp,
                descricao: item.weather[0].description,
                iconeUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
              });
            }

            if (diasUnicos.length === 7) break;
          }

          this.previsao = diasUnicos;
        },
        error: (err) => {
          this.previsao = [];
        }
      });
  }

  formatarData(dataISO: string): string {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}-${mes}-${ano}`;
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

  getClasseClima(condicao: string): string {
    const cond = condicao.toLowerCase();

    if (cond.includes('chuva')) return 'clima-chuvoso';
    if (cond.includes('nuvem') || cond.includes('nublado')) return 'clima-nublado';
    if (cond.includes('sol') || cond.includes('claro') || cond.includes('limpo')) return 'clima-ensolarado';
    if (cond.includes('neve')) return 'clima-neve';

    return 'clima-padrao';
  }

}
