# Prueba técnica - GeoDB

Víctor del Val Andrés

## Resumen del ejercicio

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

El ejercicio lo voy a resolver utilizando React, por varios motivos:
* Tecnología de primera para contruir interfaces web
* Interfaces móviles con React Native
* Gran experiencia del desarrollador
* Gran adopción en la industria

Voy a utilizar las técnicas novedosas de React (ContextAPi y los Hooks) que tienden hacia un desarrollo más eficiente mediante componentes únicamente de tipo funcional y gestión del estado (sin componentes de tipo clase, ni Redux para gestionar el estado de la SPA).
