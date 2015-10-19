$(document).ready(function() {
	var idiomCounter = 0,
		academicsCounter = 0,
		professionalExperienceCounter = 0,
		complementaryCounter = 0;

	var addIdiom = function() {
		idiomCounter++;
		if (idiomCounter <=4) {
			$(this).parent().parent().before($('#idiom-template').clone().attr('id', 'idiom-template' + idiomCounter));
			$('#idiom-template' + idiomCounter).children().children().remove('a');
		}

	}

	$('#idiom-add').click(addIdiom);
	

	$('.academics-add').click(function () {
		academicsCounter++;

		if (academicsCounter <= 4) {
			$(this).parent()
				   .parent()
				   .before($('#academics-template').clone().attr('id', 'academics-template' + academicsCounter));

			$('#academics-template' + academicsCounter).children().children('input').each(function () {
				$(this).attr('name', $(this).attr('name') + academicsCounter);
				$(this).attr('id', $(this).attr('name') + academicsCounter);
			});
			$('#academics-template' + academicsCounter).children().children().remove('a');
		}
	});

	$('.professional-experience-add').click(function () {
		professionalExperienceCounter++;

		if (professionalExperienceCounter <= 4) {
			$(this).parent()
				   .parent()
				   .before($('#professional-experience-template').clone().attr('id', 'professional-experience-template' + professionalExperienceCounter));

			$('#professional-experience-template' + professionalExperienceCounter).children().children('input').each(function() {
				$(this).attr('name', $(this).attr('name') + professionalExperienceCounter);
				$(this).attr('id', $(this).attr('name') + professionalExperienceCounter);
			});
			$('#professional-experience-template' + professionalExperienceCounter).children().children().remove('a');   
		}
	});

	var addComplementary = function () {
		complementaryCounter++;

		if (complementaryCounter <= 4) {
			$(this).parent()
				   .parent()
				   .before($('#complementary-template').clone().attr('id', 'complementary-template' + complementaryCounter));

			$('#complementary-template' + complementaryCounter).children().children('input').each(function() {
				$(this).attr('name', $(this).attr('name') + complementaryCounter);
				$(this).attr('id', $(this).attr('name') + complementaryCounter);
			});

			$('#complementary-template' + complementaryCounter).children().children().remove('a');
		}
	}

	$('#complementary-add').click(addComplementary);
	

	$('#academic-button').click(function() {
		$('#personal-data').addClass('animated fadeOutRight')
						   .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
						   		$('#personal-data').remove();
						   		$('#actual-form').append(experienceData);
						   		$('#experience-data').addClass('animated fadeInUp')
						   							 .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
						   							 	$('#experience-data').removeClass('animated fadeInUp');
						   							 });
						   });
	});

	$('#professional-button').click(function() {
		$('#experience-data').addClass('animated fadeOutRight')
							 .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
							 	$('#experience-data').remove();
							 	$('#actual-form').append(professionalData);
							 	$('#professional-data').addClass('animated fadeInUp')
							 						   .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
							 						   		$('#professional-data').removeClass('animated fadeInUp');
							 						   });
							 });
	});

	var experienceData   = $('#experience-data').detach(),
		professionalData = $('#professional-data').detach();
});