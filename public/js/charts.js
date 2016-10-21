// <script>
    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    var lineChartData = {
        labels : ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],
        datasets : [
            {
                label: "Works",
                fillColor : "rgba(255, 193, 7, 0.5)",
                strokeColor : "#fff",
                pointColor : "rgba(255, 193, 7, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(255, 193, 7, 1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Health",
                fillColor : "rgba(244, 67, 54, 0.5)",
                strokeColor : "#fff",

                pointColor : "rgba(244, 67, 54, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(244, 67, 54, 1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Family",
                fillColor : "rgba(33, 150, 143, 0.7)",
                strokeColor : "#fff",
                pointColor : "rgba(33, 150, 243, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(33, 150, 243, 1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "College",
                fillColor : "rgba(204, 67, 54, 0.5)",
                strokeColor : "#fff",

                pointColor : "rgba(244, 67, 54, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(244, 67, 54, 1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Prayer",
                fillColor : "rgba(133, 50, 243, 0.7)",
                strokeColor : "#fff",
                pointColor : "rgba(33, 150, 243, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(33, 150, 243, 1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    }

    var lineChartData2 = {
        labels : ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],
        datasets : [
            {
                label: "Products added to cart",
                fillColor : "rgba(3, 169, 244, 0.65)",
                strokeColor : "#fff",
                pointColor : "rgba(3, 169, 244, 0.65)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(3, 169, 244, 0.65)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "Actually purchased goods",
                fillColor : "rgba(139, 195, 74, 0.65)",
                strokeColor : "#fff",
                pointColor : "rgba(139, 195, 74, 0.65)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "rgba(139, 195, 74, 0.65)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    }

    var radarChartData = {
    labels: ["YANDEX MONEY", "VISA", "PAYPAL", "MASTERCARD", "WEBMONEY", "QIWI"],
    datasets: [
      {
        fillColor: "#8BC34A",
        pointColor: "#8BC34A",
        strokeColor: "#72a13d",
        data: [65,59,90,81,56,55]
      },
      {
        fillColor: "#673AB7",
        pointColor: "#673AB7",
        strokeColor: "#563098",
        data: [28,48,40,19,96,27]
      }
    ]
  };

    var pieData = [
        {
            value: 260,
            color: "rgb(76, 175, 80)",
            highlight: "rgba(76, 175, 80, 0.8)",
            label: "Works"
        },
        {
            value: 50,
            color:"rgb(244, 67, 54)",
            highlight: "rgba(244, 67, 54, 0.8)",
            label: "Family"
        },
        {
            value: 100,
            color: "rgb(255, 193, 7)",
            highlight: "rgba(255, 193, 7, 0.8)",
            label: "Health"
        },
        {
            value: 40,
            color: "rgb(33, 150, 243)",
            highlight: "rgba(33, 150, 243, 0.8)",
            label: "College"
        },
        {
            value: 120,
            color: "rgb(103, 58, 183)",
            highlight: "rgba(103, 58, 183, 0.8)",
            label: "Prayer"
        }

    ];

    var pieData2 = [
        {
            value: 260,
            color: "rgb(139, 195, 74)",
            highlight: "rgba(139, 195, 74, 0.8)",
            label: "Orders"
        },
        {
            value: 80,
            color:"rgb(3, 169, 244)",
            highlight: "rgba(3, 169, 244, 0.8)",
            label: "Returns"
        }

    ];

    var pieData3 = [
        {
            value: 160,
            color:"rgb(244, 67, 54)",
            highlight: "rgba(244, 67, 54, 0.8)",
            label: "Dollars"
        },
        {
            value: 180,
            color: "rgb(103, 58, 183)",
            highlight: "rgba(103, 58, 183, 0.8)",
            label: "Euro"
        }

    ];

    var barChartData = {
    labels : ["TODAY"],
    datasets : [
      {
        fillColor : "rgba(3, 169, 244, 0.65)",
        strokeColor : "rgba(3, 169, 244, 0.65)",
        highlightFill: "rgba(3, 169, 244, 0.75)",
        highlightStroke: "rgba(3, 169, 244, 1)",
                label: "Coats Tony Taylor",
        data : [randomScalingFactor()]			},
      {
        fillColor : "rgba(139, 195, 74, 0.65)",
        strokeColor : "rgba(139, 195, 74, 0.65)",
        highlightFill : "rgba(139, 195, 74, 0.75)",
        highlightStroke : "rgba(139, 195, 74, 1)",
                label: "Sketchers sneakers",
        data : [randomScalingFactor()]			},
      {
        fillColor : "rgba(244, 67, 54, 0.65)",
        strokeColor : "rgba(244, 67, 54, 0.65)",
        highlightFill : "rgba(244, 67, 54, 0.75)",
        highlightStroke : "rgba(244, 67, 54, 1)",
                label: "Sweater Deer",
        data : [randomScalingFactor()]
      },
      {
        fillColor : "rgba(255, 193, 7, 0.65)",
        strokeColor : "rgba(255, 193, 7, 0.65)",
        highlightFill : "rgba(255, 193, 7, 0.75)",
        highlightStroke : "rgba(255, 193, 7, 1)",
                label: "Jacket",
        data : [randomScalingFactor()]
      },
      {
        fillColor : "rgba(103, 58, 183, 0.65)",
        strokeColor : "rgba(103, 58, 183, 0.65)",
        highlightFill : "rgba(103, 58, 183, 0.75)",
        highlightStroke : "rgba(103, 58, 183, 1)",
                label: "Shirt Diamont",
        data : [randomScalingFactor()]
      },
      {
        fillColor : "rgba(205, 220, 57, 0.65)",
        strokeColor : "rgba(205, 220, 57, 0.65)",
        highlightFill : "rgba(205, 220, 57, 0.75)",
        highlightStroke : "rgba(205, 220, 57, 1)",
                label: "Shoos",
        data : [randomScalingFactor()]
      },
      {
        fillColor : "rgba(158, 158, 158, 0.65)",
        strokeColor : "rgba(158, 158, 158, 0.65)",
        highlightFill : "rgba(158, 158, 158, 0.75)",
        highlightStroke : "rgba(158, 158, 158, 1)",
                label: "Jeans",
        data : [randomScalingFactor()]
      },
      {
        fillColor : "rgba(121, 85, 72, 0.65)",
        strokeColor : "rgba(121, 85, 72, 0.65)",
        highlightFill : "rgba(121, 85, 72, 0.75)",
        highlightStroke : "rgba(121, 85, 72, 1)",
                label: "Watches",
        data : [randomScalingFactor()]
      }
    ]

  }
function newagenda() {
  $('#task').hide()
  $('#newagenda').show()
  $('#totalsales').hide()
  $('#bestseling').hide()
  $('#bestselingbar').hide()
  $('#bestselingpie').hide()
  $('#currency').hide()
  $('#currencyorders').hide()
  $('#currencypayment').hide()
  $('#compare').hide()
}
function task() {
  $('#task').show()
  $('#newagenda').hide()
  $('#totalsales').hide()
  $('#bestseling').hide()
  $('#bestselingbar').hide()
  $('#bestselingpie').hide()
  $('#currency').hide()
  $('#currencyorders').hide()
  $('#currencypayment').hide()
  $('#compare').hide()
}
function report() {
  $('#task').hide()
  $('#newagenda').hide()
  $('#totalsales').hide()
  $('#bestseling').show()
  $('#bestselingbar').hide()
  $('#bestselingpie').show()
  $('#currency').hide()
  $('#currencyorders').hide()
  $('#currencypayment').hide()
  $('#compare').hide()

}

  window.onload = function(){
    // $('#task').hide()
    $('#newagenda').hide()
    $('#totalsales').hide()
    $('#bestseling').hide()
    $('#bestselingbar').hide()
    $('#bestselingpie').hide()
    $('#currency').hide()
    $('#currencyorders').hide()
    $('#currencypayment').hide()
    $('#compare').hide()
    $("#btnadd").on('click',function (event) {
      event.preventDefault()

      $('#taskcontent').prepend(`<div data-bg='primary-bg' class='fc-event primary-bg ui-draggable ui-draggable-handle'>${$("input[name='agenda']").val()}<span class='zmdi zmdi-close remove-event'></span></div>`)
      $('#taskcontentup').prepend(`<div data-bg='primary-bg' class='fc-event primary-bg ui-draggable ui-draggable-handle'>${$("input[name='agenda']").val()}<span class='zmdi zmdi-close remove-event'></span></div>`)
      $('#external-events .fc-event').each(function () {
      // store data so the calendar knows to render an event upon drop
      $(this).data('eventObject', {
      title: $.trim($(this).text()),
      className: $(this).attr("data-bg"), // use the element's text as the event title
      stick: true // maintain when user navigates (see docs on the renderEvent method)
      });
      // make the event draggable using jQuery UI
      $(this).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0 //  original position after the drag
      });
      });
      $.ajax({
        type: 'POST',
        url: '/api/schedule',
        data: {agenda: $("input[name='agenda']").val(), begindate: $("input[name='begindate']").val(), enddate: $("input[name='enddate']").val(), beginhour: $("input[name='beginhour']").val(),endhour:$("input[name='endhour']").val(),status:$("input[name='status']").val()},
        success: function(result){
          console.log('data inserted')
        }
      })
    })
      var ctx = document.getElementById("chart-line").getContext("2d");
      var myLine = new Chart(ctx).Line(lineChartData, {
        scaleShowVerticalLines: false,
        scaleShowLabels: false,
//        maintainAspectRatio: true,
        datasetStrokeWidth : 6,
        pointDotRadius : 6,
        responsive: true,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].pointColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      });

      document.getElementById('js-legend').innerHTML = myLine.generateLegend();

      var ctx2 = document.getElementById("chart-line-2").getContext("2d");
      var myLine2 = new Chart(ctx2).Line(lineChartData2, {
        scaleShowVerticalLines: false,
        scaleShowLabels: false,
        maintainAspectRatio: true,
        datasetStrokeWidth : 6,
        pointDotRadius : 6,
        responsive: true,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].pointColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      });

      document.getElementById('js-legend-2').innerHTML = myLine2.generateLegend();

      var ctx3 = document.getElementById("chart-pie").getContext("2d");
      var myPie = new Chart(ctx3).Pie(pieData, {
        segmentShowStroke : false
      });

      document.getElementById('js-legend-3').innerHTML = myPie.generateLegend();

      var ctx4 = document.getElementById("chart-pie-2").getContext("2d");
      var myPie2 = new Chart(ctx4).Pie(pieData2, {
        segmentStrokeWidth : 5,
        percentageInnerCutout : 0
      });

      document.getElementById('js-legend-5').innerHTML = myPie2.generateLegend();

      var ctx44 = document.getElementById("chart-pie-3").getContext("2d");
      var myPie3 = new Chart(ctx44).Pie(pieData3, {
        segmentStrokeWidth : 5,
        percentageInnerCutout : 0
      });

      document.getElementById('js-legend-4').innerHTML = myPie3.generateLegend();

      var ctx5 = document.getElementById("chart-bar").getContext("2d");
      var myBar = new Chart(ctx5).Bar(barChartData, {
        responsive : true,
        scaleShowVerticalLines: false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      });

      document.getElementById('js-legend-bar').innerHTML = myBar.generateLegend();

      window.myRadar = new  Chart(document.getElementById("chart-radar").getContext("2d")).Radar(radarChartData, {
          responsive: true,
          datasetStrokeWidth : 5,
          pointDot : false,
      });

  }

  //      </script>
  // <script>
    if($(window).width() >= 1440){
      $(".side-panel").addClass("open");
      $(".sidepanel-toggle").parent().addClass("open");
      $("body").addClass("small-content");
    }
    else{
      $(".side-panel").removeClass("open");
      $(".sidepanel-toggle").parent().removeClass("open");
      $("body").removeClass("three-column-layout small-content");
    }

    $(window).resize(function(){
      if($(window).width() >= 1440){
        $(".side-panel").addClass("open");
        $(".sidepanel-toggle").parent().addClass("open");
        $("body").addClass("three-column-layout small-content");
      }
      else{
        $(".side-panel").removeClass("open");
        $(".sidepanel-toggle").parent().removeClass("open");
        $("body").removeClass("three-column-layout small-content");
      }
    });

      //  </script>
