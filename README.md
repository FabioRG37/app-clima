# 🌤️ App de Clima - Ionic + Angular

Aplicativo simples que permite ao usuário buscar o clima atual de uma cidade, consumindo a API da [OpenWeatherMap](https://openweathermap.org/api).

## 📱 Funcionalidades

- Buscar o clima atual por nome da cidade
- Exibir:
  - Nome da cidade
  - Descrição do clima
  - Ícone representativo
  - Temperatura em graus Celsius
- Validação de entrada
- Tratamento de erro (ex: cidade inválida)

## 🔧 Tecnologias utilizadas

- [Ionic Framework 7](https://ionicframework.com/)
- [Angular 17](https://angular.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- TypeScript

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/app-clima.git
cd app-clima
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a chave da API

Crie o arquivo:

```
src/environments/.env.local.ts
```

E adicione:

```ts
export const localSecrets = {
  weatherApiKey: 'SUA_CHAVE_AQUI'
};
```

> ❗ Esse arquivo está no `.gitignore` por segurança.

### 4. Execute a aplicação

```bash
npm start
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 📁 Estrutura principal

```
src/
├── app/
│   ├── pages/home/         → Tela principal com o formulário de busca
│   ├── services/weather/   → Serviço responsável pela requisição HTTP
├── environments/
│   ├── environment.ts      → Configurações gerais (URL base)
│   ├── .env.local.ts       → Arquivo local com chave da API (não versionado)
```

## 🛡️ Segurança

* A chave da API da OpenWeatherMap **não está incluída** no repositório.
* O projeto utiliza um arquivo local `.env.local.ts`, excluído via `.gitignore`.

## 📷 Captura de tela *(opcional)*

> Adicione aqui uma imagem da interface se desejar.

## 📄 Licença

Este projeto está sob a licença MIT.
