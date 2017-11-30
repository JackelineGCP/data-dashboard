/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', function() {
  var sede = document.getElementById('sede');
  var generacion = document.getElementById('generation');
  
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
});

// La cantidad de estudiantes que superan la meta de puntos en promedio
//  de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.

var techS = document.getElementById('techS');
var techSkills = document.createElement('div');
var titleTS = document.createElement('h1');
titleTS.innerText = 'TECH SKILLS';
var comboTS = document.createElement('select');
var OP1 = document.createElement('option');
OP1.innerText = 'Sprint 1';
var OP2 = document.createElement('option');
OP2.innerText = 'Sprint 1';
var OP3 = document.createElement('option');
OP3.innerText = 'Sprint 3';
var OP4 = document.createElement('option');
OP4.innerText = 'Sprint 4';
var metTarget = document.createElement('div');
var titleMT = document.createElement('h1');
titleMT.innerText = 'numberofpercent';
var textMT = document.createElement('span');
textMT.innerText = '# STUDENTS THAT MEET THE TARGET';
var totalTS = document.createElement('div');
var titleTS2 = document.createElement('h1');
titleTS2.innerText = 'percentoftotal';
var textTS = document.createElement('span');
textTS.innerText = '% Of TOTAL';
// agregando clases
