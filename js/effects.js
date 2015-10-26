$(document).ready(function() {
	$('.header_cap').click(function(event) {
		var effectIn = 'animated slideInLeft',
			effectOut = 'animated slideOutLeft',
			cap = $(this).children('.capitulos');
			clicked = !$(this).data('clicked') ? 0 : 1;

		console.log(clicked);

		$(cap).css({
			'opacity': 1,
			'z-index': 1
		})
		.children()
		.css('opacity', 1);

		if (clicked) {
			$(cap).removeClass(effectIn);
			$(cap).addClass(effectOut);
			$(this).data('clicked', 0);
		} else {
			$(cap).removeClass(effectOut);
			$(cap).addClass(effectIn);
			$(this).data('clicked', 1);
		}
	});

	var balloons = $('#hands-list').children('li');
    $.each(balloons, function(index, balloon) {
        $(balloon).click(function(event) {
            $(balloons).css('z-index', 0)
                       .removeClass('animated bounceIn');
            $(this).css('z-index', 1)
                       .addClass('animated bounceIn');            
        });
    });

    var chapter02Effects = function(object, addOrRemove) {
    	var slideInLeft = 'animated slideInLeft';

    	if (addOrRemove) {
    		$(object).addClass(slideInLeft);
    	} else {
    		$(object).removeClass(slideInLeft);
    	}
    }

    var chapter03Effects = function(object, side, addOrRemove) {
    	var rotateInDownLeft = 'animated rotateInDownLeft',
    		rotateInDownRight = 'animated rotateInDownRight';

    	if (addOrRemove) {
    		if (side === 'left') {
    			$(object).addClass(rotateInDownLeft);
    		} else {
    			$(object).addClass(rotateInDownRight);
    		}
    	} else {
    		if (side === 'left') {
    			$(object).removeClass(rotateInDownLeft)
    		} else {
    			$(object).removeClass(rotateInDownRight);
    		}
    	}
    }

    var chapter04EffectsA = function(object, addOrRemove) {
    	var flipInX = 'animated flipInX';

    	if (addOrRemove) {
    		$(object).addClass(flipInX);
    	} else {
    		$(object).removeClass(flipInX);
    	}
    }

    var chapter04EffectsB = function(object, addOrRemove) {
    	var slideInDown = 'animated slideInDown';

    	if (addOrRemove) {
    		$(object).addClass(slideInDown);
    	} else {
    		$(object).removeClass(slideInDown);
    	}
    }

    Reveal.addEventListener('fragmentshown', function(event) {
    	var fragment = event.fragment;
    		

    	var chapter02 = 'lista_cap02',
    		chapter03Left = 'lista_cap03_esq',
    		chapter03Right = 'lista_cap03_dir',
    		chapter04A = 'lista_cap04A',
    		chapter04B = 'lista_cap04B';

    	if ($(fragment).hasClass(chapter02)) {
    		chapter02Effects(fragment, true);
    	} else if ($(fragment).hasClass(chapter03Left)) {	
    		chapter03Effects(fragment, 'left', true);
    	} else if ($(fragment).hasClass(chapter03Right)) {
    		chapter03Effects(fragment, 'right', true);
    	} else if ($(fragment).hasClass(chapter04A)) {
    		chapter04EffectsA(fragment, true);
    	} else if ($(fragment).hasClass(chapter04B)) {
    		chapter04EffectsB(fragment, true);
    	}
    });

    Reveal.addEventListener('fragmenthidden', function(event) {
    	var fragment = event.fragment;

    	var chapter02 = 'lista_cap02',
    		chapter03Left = 'lista_cap03_esq',
    		chapter03Right = 'lista_cap03_dir',
    		chapter04A = 'lista_cap04A',
    		chapter04B = 'lista_cap04B';

    	if ($(fragment).hasClass(chapter02)) {
    		chapter02Effects(fragment, false);
    	} else if ($(fragment).hasClass(chapter03Left)) {	
    		chapter03Effects(fragment, 'left', false);
    	} else if ($(fragment).hasClass(chapter03Right)) {
    		chapter03Effects(fragment, 'right', false);
    	} else if ($(fragment).hasClass(chapter04A)) {
    		chapter04EffectsA(fragment, false);
    	} else if ($(fragment).hasClass(chapter04B)) {
    		chapter04EffectsB(fragment, false);
    	}

    });

   /* $('a.open-chart').click(function() {
        // Definição do chart
       var data = {
        "responsive": true,
        "labels": ["January", "February", "March", "April", "May", "June", "July", "August", "November", "December"],
        "datasets": [{
            label: "Sodium intake",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [165, 159, 180, 181, 156, 155, 140]
        }, {
            label: "Sugar intake",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [128, 148, 140, 119, 186, 127, 190]
        }]
    }

    var context =  $('#answers-chart').get(0).getContext('2d'),
        chart = new Chart(context).Line(data); 
    });*/
});

$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  var modal = $(this);

  if ($(modal).is('#modal-chart')) {
     var data = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "#1"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "#2"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "#3"
        },
        {
            value: 250,
            color: "#ADE45C",
            highlight: "#AFC870",
            label: "#4"
        },
        {
            value: 50,
            color: "#BA045F",
            highlight: "#BA0870",
            label: "#5"
        }
    ]

    var context =  $('#answers-chart').get(0).getContext('2d'),
        chart = new Chart(context).Doughnut(data);

    var answer =$('input[name="radio-answer"]:checked', '#sec02A-form').val();
     if(answer) {
        var color;
        if (answer === '#1') {
            color = "#F7464A";
        } else if (answer === '#2') {
            color = "#46BFBD";
        } else if (answer === '#3') {
            color = "#FDB45C";
        } else if (answer === '#4') {
            color = "#ADE45C";
        } else {
            color = "#BA045F";
        }

        $('#answer').html('Sua resposta: ' + answer).css('color', color);
    } else {
        $('#answer').html('Você não respondeu!').css('color', 'red');
    }
    
  } 
});