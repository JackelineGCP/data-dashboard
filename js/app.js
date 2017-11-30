/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

window.addEventListener('load', function() {
  var sede = document.getElementById('sede');
  var generacion = document.getElementById('generation');
  var achievement = document.getElementById('achievement');
  
  var city = '';
  var generation = '';
  students = {};
  
  generacion.addEventListener('change', totalStudents);
   
  function totalStudents(event) {
    city = sede.value;
    generation = generacion.value;
    students = data[city][generation].students;
    var total = document.getElementById('toStudents');
    total.textContent = students.length;
  }
/*
  // Pregunta1: El total de estudiantes presentes por sede y generación.
  function totalStudentActive(sede, generation) {
    var arrayStudents = data[sede][generation]['students'];
    var countActive = 0;  
    for (i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i]['active'] === true) {
        countActive += 1;
      } 
    }
    return countActive;
  }
  totalStudentActive('AQP', '2016-2');

  // Pregunta2: El porcentaje de deserción de estudiantes.
  // var total = data.AQP['2016-2']['students'].length  //accedo al total de estudiantes por sede y promoción
  function totalStudentInactive(sede, generation) {
    var arrayStudents = data[sede][generation]['students'];
    var numberOfStudents = arrayStudents.length;
    var countInactive = 0;  
    
    for (i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i]['active'] === false) {
        countInactive += 1;
      } 
    }
    return countInactive * 100 / numberOfStudents;
  }
  totalStudentInactive('AQP', '2016-2');

  // Pregunta 3: La cantidad de estudiantes que superan la meta de puntos 
  // data.AQP['2016-2']['students'][0]['sprints']
  generacion.addEventListener('change', studentsExceedGoal);

  function studentsExceedGoal(event) {
    var count = 0;
    var arrayStudents = data[sede][generation]['students'];
    for (i = 0; arrayStudents.length; i++) {
      if (arrayStudents[i]['sprints'] === 70) {
        count2 += 1;
      }
    }
    
  // Pregunta 9:La puntuación promedio de l@s profesores

  function averageScoreTeachers(sede, generation) {
    var averageTeachers = data[sede][generation]['ratings'];
    var scoreTeachers = 0;
      for (i = 0; i < averageTeachers.length; i++) {
        scoreTeachers += averageTeachers[i].teacher;
        }
      }
      return scoreTeachers;
    }
    averageScoreTeachers('AQP', '2016-2');


  //Pregunta 10: La puntuación promedio de l@s jedi master
   
  function averageJediMasters(sede, generation) {
    var averageScoreJedi = data[sede][generation]['ratings'];
    var ScoreJedi = 0;  
    for (i = 0; i < averageScoreJedi.length; i++) {
      ScoreJedi += averageScoreJedi[i].jedi;
    }
    return ScoreJedi;
  }
  averageJediMasters('AQP', '2016-2');
*/
});
