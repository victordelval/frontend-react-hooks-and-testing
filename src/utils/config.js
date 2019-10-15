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
        body: "Busca a tu profesor y consulta su disponibilidad semanal para tutorías"
      },
      linkToOtherProfessors: {
        title: "Otros profesores",
        body: "Selecciona la asignatura para ver la disponibilidad de otros profesores"
      }
    },
    professor: {
      title: "Selecciona un profesor para ver su disponibilidad semanal para tutorías"
    },
    otherProfessors: {
      title: "Selecciona una asignatura para ver la disponibilidad de otros profesores"
    }
  }
};
