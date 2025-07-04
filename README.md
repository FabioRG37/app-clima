# App Clima ☀️🌧️

Aplicativo desenvolvido com **Ionic + Angular**, que consome a API da **OpenWeatherMap** para exibir a previsão do tempo atual e dos próximos 7 dias.

---

## 🔧 Funcionalidades

- ✅ Busca de clima atual por nome da cidade ou geolocalização
- ✅ Exibição do clima atual (ícone, temperatura, descrição)
- ✅ Previsão para os **próximos 7 dias** (excluindo o dia atual)
- ✅ Alternância entre modo claro/escuro com botão no topo
- ✅ Layout responsivo, adaptado para dispositivos móveis
- ✅ Frase "Previsão para os próximos 7 dias" exibida dinamicamente
- ✅ Correção de espaçamento no último card de previsão
- ✅ Proteção da chave da API com arquivo `.env.local`

---

## 💡 Tecnologias

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/FabioRG37/app-clima.git

# Acesse a pasta
cd app-clima

# Instale as dependências
npm install

# Crie o arquivo com suas chaves
cp src/environments/.env.local.example src/environments/.env.local

# Compile o projeto
npm run build

# Execute em ambiente local
ionic serve
````

---

## 📱 Executar no dispositivo físico

```bash
ionic cap add android
ionic cap sync
ionic cap open android
```

> Certifique-se de que o projeto tenha sido compilado (`npm run build`) antes de abrir no Android Studio.

---

## 🔐 Observações

* A chave da API **NÃO** é incluída no repositório público. Para usar, crie seu próprio `.env.local`.
* O modo escuro pode ser controlado manualmente **apenas quando o tema do dispositivo estiver desativado**.

---

## 👨‍💻 Autor

Desenvolvido por [Fábio Gonçalves](https://github.com/FabioRG37)

````

