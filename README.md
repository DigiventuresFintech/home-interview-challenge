# Digiventures Take Home Exercise

## Run Locally

Clone the project

```bash
  git clone https://github.com/DigiventuresFintech/home-interview-challenge.git
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

Se debe utilizar la librería de componentes React Strap: https://reactstrap.github.io/components

El comportamiento de las páginas será:

Si el "path" _se encuentra configurado_, la página existe y debe generar su contenido.

Si el "path" _no se encuentra configurado_, se debe informar un error 404.

Los formularios generados deben modificar un estado que defina propiedades en un objeto que se utilizará para emitir al servidor en el body (se puede utilizar axios o fetch).

El código debe soportar cambios de configuración sin deber incidir en el código, siempre y cuando las instrucciones de ejecución como los algoritmos de validación existan.

La emisión del estado contenedor de los valores de los inputs deberá hacerse como método `POST` a la ruta `/:pathname`, la misma donde nos encontramos actualmente.

Ejemplo: si nos encontramos en `/login`, el `post` se debe hacer a `/login`

Como resultado se deberá tener una pantalla genérica donde según la URL se cargue y se genere el contenido según la configuración, donde agregando la propiedad "recovery" a la configuración, al ingresar a "/recovery" deberíamos ver contenido nuevo sin realizar modificaciones en el FrontEnd.

#### 🔧 Backend

Se debe completar el código faltante del `método get de ConfigurationController - server.js (línea 28)` para retornar la configuración.

#### Si eres o te postulas para Jr 👨‍💻

Debes guiarte del json de configuración para crear los inputs y establecer sus propiedades, pero no debes realizarlos con autogeneración ni validaciones. Simplemente crea los formularios y envíalos al backend.


#### 🏄 Objetivos adicionales

- Integrar MongoDB
- Crear modelo de configuración
- Implementar búsqueda de configuración en MongoDB (buscar por nombre de página)

#### 👉 ¿Qué implica cada posible valor del modelo?

Modelo real: https://github.com/DigiventuresFintech/home-interview-challenge/blob/main/models/inputs.json

Algunos inputs de ejemplo:

```json
{
  "path": {
    //page path
    "title": "", //título de la página
    "inputs": [
      {
        "type": "text", //tipo de input o componente
        "name": "username", //nombre del input en el evento
        "label": "Username", //label del input
        "regex": "^w{1,32}$", //regex de control
        "required": true //necesario o no para el envío
      },
      {
        "type": "link", //<a href='' />
        "target": "https://digiventures.la/", //página de destino
        "text": "¿Any problem? Contact us" //texto que debe ser presionado
      },
      {
        "type": "confirm_password",
        "name": "password",
        "label": "Confirm your password",
        "regex": "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
        "conditions": {
          //incluye condiciones complejas
          "validations": [{ "comparision": "same", "input": "password" }]
          //array de validaciones de comparación para dar como válido el input
          //comparision: algoritmo de comparación
          //input: indica un input del cual tomar el valor de comparasión
        }
      },
      {
        "type": "select",
        "name": "country",
        "label": "¿Where are you living?",
        "options": [
          //opciones del select
          { "value": "argentina", "label": "Argentina" },
          { "value": "other", "label": "Other" }
        ]
      },
      {
        "type": "text",
        "name": "custom_country",
        "label": "Specify which country",
        "conditions": {
          "validations": [
            {
              "comparision": "not_includes",
              "input": "country",
              "values": ["argentina"]
            }
            //not_includes: algoritmo de - no inclusión
            //values: array que contiene que valores no debe tener
            //si escribe argentina debe dar error
          ],
          "render": [
            [
              {
                "comparision": "includes", //includes - debe contener el valor
                "input": "country", //input de selección de valor
                "values": ["other"] //array: debe contener el valor other
              }
            ]
          ]
        }
      },
      {
        "type": "button",
        "label": "Create account",
        "method": "register" //debe invocar el método register
      }
    ]
  }
}
```

#### 💪 Authors

- [@digiventures](https://github.com/DigiventuresFintech)
- [@agustinquetto](https://www.github.com/agustinquetto) (puedes contactarme si tienes preguntas)

## Mock up demo

![demo](https://github.com/DigiventuresFintech/home-interview-challenge/blob/9f12f0b4700a58f7ff25a58280a27a577acb3c5b/pages_example.jpg?raw=true)
