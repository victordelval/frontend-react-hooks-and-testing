# Frontend con React (Hooks y Testing)

Víctor del Val Andrés

**Índice de contenidos**
* [Overview](#overview)
* [Resumen del enunciado](#resumen-del-enunciado)
* [Desarrollo del ejercicio](#desarrollo-del-ejercicio)
  * [Planteamiento inicial](#planteamiento-inicial)
  * [Reto 1](#reto-1)
  * [Reto 2](#reto-2)
  * [Reto 3](#reto-3)
* [Observaciones y mejoras](#observaciones-y-mejoras)


## Overview

Para la puesta en marcha de la aplicación:

1. Primero hay que instalar las dependencias del proyecto (`npm install`)

1. Después hay que inicializar, desde dos sesiones de la interfaz de línea de comandos, tanto la aplicación frontend (`npm start`) como el servidor json-server (`npm run server`)

1. Comprueba que los tests pasan correctamente (`npm test`)


## Resumen del enunciado

### Escenario 

El objetivo es construir una PoC para el portal web del proyecto **Tutoriza2** de la UPM.

**Problemática**

Una de las quejas más frecuentemente formulada por los alumnos es que el profesorado raramente les ofrece un horario de tutorías adecuado para sus necesidades formativas.

**Solución**

Formato de tutorías cruzadas, en el que las tutorías de una asignatura pueden ser cubiertas por cualquier profesor que esté adscrito al área de conocimiento deL profesor que la imparte.

En el portal web a crear los alumnos dispondría de dos opciones:
1. Conocer los horarios de tutorías para un profesor determinado.
2. Conocer los profesores que, sin ser los tutores de una asignatura, comparten área de conocimiento con el profesor y podrían atenderle.

### Reto 1 (backend)

**Objetivo**

Desarrollar un backend desde el que obtener esta información para el portal web, con total libertad.

El ​ único objetivo de este reto es que la información que se use en el portal Tutoriza2 sea leída de un lugar externo. Por ello, no es necesario realizar un almacenamiento en BD ni incluir múltiples endpoints. Puede ser tan simple como sea necesario.

**Escenario**

Los horarios de tutorías son entregados por cada profesor a principio de curso y actualizados anualmente o ante causa mayor. Por tanto, se trata de una información de naturaleza estática pero que puede ser modificada.

Dentro de esta información se deberá proporcionar:
1. Los nombres de los profesores.
2. Sus horarios de tutorías.
3. La dirección de su despacho.
4. Su área de conocimiento. Las áreas de conocimiento iniciales serán:  
    a. Lenguajes de programación.  
    b. Arquitectura de computadores.  
    c. Análisis de la información.

### Reto 2 (cliente web)

Desarrollar la primera versión de Tutoriza2. Esta debe permitir dos acciones:

1. Poder buscar un profesor y conocer sus horarios de tutorías.
2. Conocer los profesores que podrían atender las tutorías de una asignatura. Recordemos que no se conoce el área de una asignatura, sino el área de conocimiento del profesor que la imparte. Por tanto, para conocer qué profesores pueden atender las tutorías de una asignatura el sistema debe derivarlo a partir del área de conocimiento del profesor que la imparte.


La UPM te ha dado total libertad en cuanto al diseño de la interfaz, pero te ha indicado que les gustaría obtener un portal 
* simple y minimalista 
* se vea correctamente en dispositivos móviles (responsive)

### Reto 3 (sugerencia)

Implementar una única propuesta, tanto propia como de las propuestas por los alumnos:

1. A muchos estudiantes les gustaría que el sistema les indicase las horas de tutorías más próximas a la actual. Así, cuando tengan alguna hora libre imprevista pueden tener justo la información que necesitan.
2. A muchos estudiantes les gustaría obtener indicaciones para llegar al despacho de un profesor, pues los más nuevos apenas conocen las instalaciones de la universidad.
3. Algunos estudiantes han expresado su malestar por el trato de ciertos profesores. Por ello, creen que sería de ayuda conocer la opinión de otros alumnos sobre un profesor antes de acudir a sus tutorías.


## Desarrollo del ejercicio

### Planteamiento inicial

#### Enfoque

Para la realización del ejercicio se ha tenido en cuenta los siguientes criterios:
* Proceso ágil, tipo iterativo e incremental
* Soluciones sencillas
* Buenas prácticas
* Tests

#### Tecnologia 

El ejercicio lo voy a resolver utilizando React, por varios motivos:
* Tecnología de primera para contruir interfaces web
* Gran experiencia del desarrollador
* Gran adopción en la industria
* Plataforma móvil con React Native

Voy a utilizar las técnicas novedosas de React (Hooks y Context API) que tienden hacia un desarrollo más eficiente mediante componentes únicamente de tipo funcional y gestión del estado (sin componentes de tipo clase, ni Redux para gestionar el estado de la SPA).


### Reto 1

Para solucionar un backend externo al cliente web, se puede resolver fácilmente de varias maneras, siendo algunas de las más sencillas `json-server` para simular una API REST y `graphql-yoga` para simular una API con GraphQL.

En el supuesto de que el backend también fuera objeto de desarrollo se podría haber implementado fácilmente alguna solución completa sirviendo una API desde un servidor Node.js con Express, o un backend serverless con servicios de AWS (Lambda, DynamoDB y Amplify) o de Google (Firebase, Firestore, Cloud Functions) 

Para el desarrollo del ejercicio se ha optado por implementar una API REST con `json-server`. Construido el prototipo inicial sería interesante valorar implementar la API con GraphQL debido a las ventajas que supone en un escenario de uso móvil (limitaciones de datos y cobertura)

Según los requerimientos, el patrón de consultas al backend sería el siguiente:
* Consultar el listado de profesores con su información completa (para luego poder buscar y filtrar en el cliente web, y en concreto poder saber el horario de un profesor concreto)
* Consultar el listado de las asignaturas (cada asignatura está asociada a un profesor y por tanto se puede derivar el área de conocimiento. A partir de esto y de la consulta anterior se puede conocer los horarios de los profesores correspondientes)

Se propone la siguiente estructura de datos para satisfacer los requrimientos de consulta:

```json
  "professors": [
    {
      "id": 1,
      "name": "John Doe",
      "office": "B101",
      "area": "Lenguajes de programación",
      "schedules": {
        "lunes": [
          { "from": "10", "to": "11" }
        ],
        "martes": [
          { "from": "10", "to": "11" }
        ],
        "miércoles": [
          { "from": "10", "to": "11" }
        ],
        "jueves": [
          { "from": "10", "to": "11" }
        ],
        "viernes": [
          { "from": "10", "to": "11" }
        ]
      }
    }
  ]

  "subjects": [
    {
      "id": 1,
      "name": "JavaScript Avanzado",
      "professor": 2
    }
  ]

```



### Reto 2

Para el desarrollo del cliente web se van a utilizar las siguientes librerías, principalmente entorno a React:
* **React** (JavaScript library for building user interfaces)
* **React DOM** (React package for working with the DOM)
* **React Router DOM** (Declarative routing for React and DOM bindings for React Router)
* **PropTypes** (Runtime type checking for React props and similar objects)
* **Axios** (Promise based HTTP client for the browser and node.js)
* **Material UI** (React components that implement Google's Material Design)

Las tecnologías selecionadas representan la vanguardía en tecnología de desarrollo Frontend y permiten desarrollar eficientemente tanto aplicaciones grandes para producción como prototipos pequeños y PoC.

El punto de partida del desarrollo ha sido inicializar el proyecto de aplicación React con la utilidad `create-react-app`, que preconfigura varias herramientas como Webpack y Jest.

Material Ui facilita el prototipado al disponer de componentes con un estilo base avanzado y totalmente adaptable y extensible. Además, permite el desarrollo de interfaces responsive, adaptables para diferentes tamaños de dispositivo.

Para la implementación de la solución se ha seguido un desarrollo iterativo e incremental, trantando de resolver de forma sencilla, primero paso a paso las funcionalidades principales (previo análisis y prediseño), luego los detalles, los estilos, refactorización, etc.

La solución planteada consiste en una pequeña aplicación SPA con 4 páginas (y la 404 para las rutas no encontradas):
* Home (`/`)
* Professor (`/profesor-asignatura`)
* Otros profesores (`/otros-profesores`)
* Horarios hoy (`/disponible-hoy`)

La aplicación presenta un pequeño estado global compartido por las páginas, en lo relativo a los datos (profesores y asignaturas). Para gestionar el estado se emplean Hooks y la Context APi, en el módulo `data/data.js`.

De esta forma, cuando se carga la aplicación inicialmente, se solicitan los datos al backend por parte de este módulo `data.js` que representa la capa de datos de la aplicación. La petición y respuesta se gestiona con el cliente http Axios.



La estructura del proyecto es la siguiente:
```
src/
    components/          # atomic ui components
        author/*
        error/*
        footer/*
        header/*
        layout/*
        linkCard/*
        loader/*
        selector/*
        timetable/*
    data/                # data layer (hooks and context)
        data.js
    pages/               # main view or containers
        availableToday/*
        home/*
        notFound/*
        otherProfessors/*
        professor/*
    utils/               # auxiliar functions and app config
        api.js
        config.js
    App.js               # global component
    index.js             # init
```

Los componentes de tipo 'component' y 'pages' tiene la siguiente estructura, donde aparece el fichero del componente, el fichero de la batería de pruebas unitarias con Jest y Enzyme, y un directorio `__snapshots__` donde se guarda el resultado de la última renderización exitosa.

```
components/
    loader/
        __snapshots__/
            loader.test.js.snap
        loader.js
        loader.test.js
```


El proceso de desarrollo a grandes rasgos ha sido el siguiente:

* Bases de la aplicación (layout, páginas, navegación)

* Capa de datos para gestionar los datos de los profesores y asignaturas como estado global, mediantes hooks y petición a servidor externo.

* Página correspondiente al profesor de la asignatura y visualización de la disponibilidad semanal en forma de tabla con el componente Timetable.

* Página correspondiente a los otros profesores correpondientes al área de conocimiento del tutor de la asignatura. Preparación de los datos de los profesores adicionales. Extensión del componente Timetable para contemplar este tipo de representación, que muestra el nombre del profesor en la tabla para distinguir las sesiones.

* Desarrollo de pruebas unitarias con Jest y Enzyme. Todos los componentes llevan al menos un test de renderizado mediante snapshots. Otros componentes presentan pruebas para varios aspectos de relevancia. Otros componentes de relevancia quedan pendientes de escribir los tests correspondientes.

* Refactorización y mejora de algunos aspectos generales, como por ejemplo
  * estructura de componentes autocontenidos en carpetas propias con test y snapshot, 
  * metadata de la app y contenidos estáticos a `utils/config`
  * Estilo y diseño gráfico de la UI


### Reto 3

Se ha optado por la realización de la primera propuesta dada la utilidad desde el punto de vista del usuario. Además permite reutilizar el componente `Timetable` que requiere ampliar su lógica para variar los contenidos representados (el día actual, diferenciando las sesiones ya pasadas y las disponibles por profesor)


## Observaciones y mejoras

### Desde el punto de vista del desarrollo

* Refactorizar el componente Timetable (subcomponentes y variantes de renderización)

* Terminar los test unitarios de las principales funcionalidades de la aplicación

* Tipado de las propiedades de los componentes con PropTypes

* Refactorización de los estilos de la aplicación con la creación de un tema propio en Material UI (custom theme)

### Desde el punto de vista del usuario

* Visualización complementaria de horarios como listas
* Recordatorio de sesión de interés