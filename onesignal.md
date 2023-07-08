# Instalação do OneSignal
## A partir desta instalação, não será possível mais usar o fluxo normal do expo go, para rodar o projeto em ambos ambientes, use emuladores.

Instalação em detalhes no link [OneSignal Expo Docs](https://documentation.onesignal.com/docs/react-native-expo-sdk-setup)

### Instalação do plugin do Onesignal
```bash
expo install onesignal-expo-plugin
```

### Instalação do sdk do Onesignal
```bash
expo install onesignal-expo-plugin
```

### Adicione o seguinte código no arquivo App.js
```js
{
  "expo": {
    ...
    "plugins": [
      [
        "onesignal-expo-plugin",
        {
          "mode": "development"
        }
      ]
    ]
  }
}
```

### Descomente o seguinte código no arquivo App.js e insira seu AppId do OneSignal
```js
// import OneSignal from 'react-native-onesignal';
// OneSignal.setAppId("YOUR_ONESIGNAL_APP_ID");
```