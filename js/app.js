/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`

window.addEventListener('load', function() {
  var sede = document.getElementById('sede');
  var generacion = document.getElementById('generacion');

  var city = '';
  var generation = '';
  students = {};

  generacion.addEventListener('change', totalstudents);
  
  function totalstudents(event) {
    city = sede.value;
    generation = generacion.value;
    students = data[city][generation].students;
    var total = document.getElementById('totalStudents');
    total.textContent = students.length;
  }
});