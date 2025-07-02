# 🌤️ App Clima - Ionic + Angular

Aplicativo desenvolvido com **Ionic + Angular**, consumindo a API da [OpenWeatherMap](https://openweathermap.org/) para exibir:

- Clima atual com ícone, temperatura e descrição
- Previsão do tempo para os próximos **7 dias**
- Suporte à **geolocalização** (com fallback manual)
- **Tema escuro e claro** com botão no cabeçalho
- Layout responsivo e otimizado para dispositivos móveis

---

## 📱 Funcionalidades

- 🔍 Busca de clima por cidade
- 📍 Sugestão de cidade com base na localização do usuário
- 🗓️ Cards de previsão com data formatada `dd-mm-aaaa`
- 🌓 Botão para alternar entre modo claro e escuro
- 📐 Layout refinado e responsivo
- 🧠 Armazenamento da preferência de tema no navegador

---

## 🚀 Tecnologias

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/FabioRG37/app-clima.git
cd app-clima

# Instale as dependências
npm install

# Substitua a chave da API no arquivo src/environments/environment.ts

# Execute o app em modo de desenvolvimento
ionic serve
````

---

## ⚙️ Configuração da API

Crie um arquivo `src/environments/environment.ts` com:

```ts
export const environment = {
  weatherApiKey: 'SUA_CHAVE_AQUI',
  weatherApiUrl: 'https://api.openweathermap.org/data/2.5'
};
```

> **Atenção:** nunca compartilhe sua chave da API em repositórios públicos.

---

## 📲 Teste no dispositivo

Para testar no Android:

```bash
ionic build
npx cap sync
npx cap open android
```

---

## 🧪 Melhorias futuras

* Histórico de buscas
* Previsão por hora
* Escolha de °C ou °F
* Traduções multilíngue

---

## 🧑‍💻 Autor

Desenvolvido por **Fábio Gonçalves** como parte de seus estudos em Ionic + Angular com foco em APIs públicas.