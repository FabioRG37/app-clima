# 🌤️ App Clima – Ionic + Angular

Aplicativo de clima desenvolvido com **Ionic Framework** e **Angular**, que consome dados da **OpenWeatherMap API**.  
Projeto voltado para estudo e prática de consumo de API, uso de geolocalização e estruturação de aplicações mobile com Capacitor.

---

## ✅ Funcionalidades

- 🔍 Busca por cidade com exibição do clima atual (temperatura, descrição e ícone)
- 📅 Previsão para os próximos 5 dias com cards responsivos
- 📍 Detecção automática da cidade via geolocalização
- 🌐 Interface limpa e responsiva com Ionic Components
- 🔒 Proteção da chave da API com variável de ambiente local (`.env.local.ts`)

---

## 💻 Tecnologias utilizadas

- [Ionic Framework 7](https://ionicframework.com/)
- [Angular 17](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Capacitor](https://capacitorjs.com/) (para build nativo Android)

---

## 🧪 Como rodar o projeto localmente

1. **Clonar o repositório:**

```bash
git clone https://github.com/SEU_USUARIO/app-clima.git
cd app-clima
````

2. **Instalar dependências:**

```bash
npm install
```

3. **Criar arquivo com sua chave da API:**

Crie `src/environments/env.local.ts` com o seguinte conteúdo:

```ts
export const localSecrets = {
  weatherApiKey: 'SUA_CHAVE_AQUI'
};
```

4. **Rodar localmente:**

```bash
ionic serve
```

---

## 📱 Rodar no Android (via Capacitor)

1. Gerar o build:

```bash
npm run build
```

2. Sincronizar com Capacitor:

```bash
npx cap sync
```

3. Abrir no Android Studio:

```bash
npx cap open android
```

4. Conectar o dispositivo e rodar

---

## 🚧 Funcionalidades futuras

* 📌 Histórico de buscas
* 🌡️ Alternar entre °C e °F
* 🖼️ Melhorias visuais e animações
* ☁️ Deploy online (Firebase Hosting)

---

## 📄 Licença

Projeto pessoal para fins de estudo.
Disponível sob a licença MIT.
