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
