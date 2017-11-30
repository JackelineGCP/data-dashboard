/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
window.addEventListener('load', function () {
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

// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['activos', 5],
    ['inactivos', 5.8],
  ]);

  // Set chart options
  var options = {
    'title': 'Estado de las alumnas',
    'width': 450,
    'height': 300
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

