export const AppConfig = {
  appName: "Tutoriza2",
  serverDomain: "http://localhost:3004",
  routes: {
    subjectProfessor: "/profesor-asignatura",
    otherProfessors: "/otros-profesores"
  },
  header: {
    linkToSubjectProfessor: "Profesor asignatura",
    linkToOtherProfessors: "Otros profesores"
  },
  pages: {
    home: {
      title: "Bienvenido a Tutoriza2!",
      subtitle: "Puedes buscar los horarios de tutorías de dos maneras",
      linkToSubjectProfessor: {
        title: "Profesor asignatura",
        body: "Busca a tu profesor y consulta su disponibilidad diaria a lo largo de la semana"
      },
      linkToOtherProfessors: {
        title: "Otros profesores",
        body: "Selecciona la asignatura de interés para consultar la disponibilidad de otros profesores relacionados"
      }
    }
  }
};
