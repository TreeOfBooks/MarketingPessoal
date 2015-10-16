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
});