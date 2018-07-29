  function cargar_grafica() {
    $("#cargar").hide();
    $("#contiene_informacion").hide();
    setTimeout(function(){ grafica_estado_proyectos(); }, 1000);
  }

  function grafica_estado_proyectos() {
    
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: ''
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

// Build the chart
Highcharts.chart('grafica_estado', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Resueltas',
            y: 11.84
        }, {
            name: 'Usuarios',
            y: 10.85
        }, {
            name: 'Suspendidas',
            y: 4.67
        }, {
            name: 'Evaluacion',
            y: 4.18
        }]
    }]
});


$("#cargar").hide();
$("#contiene_informacion").show();
  }
      
