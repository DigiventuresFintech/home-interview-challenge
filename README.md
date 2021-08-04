# Digiventures Take Home Exercise

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd home-interview-challenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## 🙌🏼 ES-es

#### 🤓 Objetivos

Deseamos crear páginas dinámicamente según un JSON de configuración consumido desde el servidor.

#### 🎨 Frontend

El comportamiento de las páginas será:

Si el "path" _se encuentra configurado_, la página existe y debe generar su contenido.

Si el "path" _no se encuentra configurado_, se debe informar un error 404.

Los formularios generados deben modificar un estado que defina propiedades en un objeto que se utilizará para emitir al servidor en el body (se puede utilizar axios o fetch).

El código debe soportar cambios de configuración sin deber incidir en el código, siempre y cuando las instrucciones de ejecución como los algoritmos de validación existan.

La emisión del estado contenedor de los valores de los inputs deberá hacerse como método `POST` a la ruta `/:pathname`, la misma donde nos encontramos actualmente.

Ejemplo: si nos encontramos en `/login`, el `post` se debe hacer a `/login`

Idealmente hacer uso del método `getInitialProps`: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps

#### 🔧 Backend

Se debe completar el código faltante del `método get de ConfigurationController - server.js (línea 28)` para retornar la configuración.

#### 🏄 Objetivos adicionales

- Integrar MongoDB
- Crear modelo de configuración
- Implementar búsqueda de configuración en MongoDB (buscar por nombre de página)

#### ✍🏼 Authors

- [@digiventures](https://github.com/DigiventuresFintech)
- [@agustinquetto](https://www.github.com/agustinquetto) (puedes contactarme si tienes preguntas)

## Mock up demo

![demo](https://github.com/DigiventuresFintech/home-interview-challenge/blob/9f12f0b4700a58f7ff25a58280a27a577acb3c5b/pages_example.jpg?raw=true)
