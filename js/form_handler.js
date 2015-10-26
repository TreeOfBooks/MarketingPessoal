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

	var inputData = {
		personalData: {},
		experienceData: {},
		professionalData: {}
	};
	

	$('#academic-button').click(function() {
		$('#personal-data').addClass('animated fadeOutRight')
						   .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
						   		var inputs = $('#personal-data').serializeArray();

						   		inputs.forEach(function(input) {
						   			var name = input.name,
						   				value = input.value;

						   			if (name === 'nome') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'nacionalidade') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'idade') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'estadoCivil') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'filhos') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'endereco') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'telefone') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'celular') {
						   				inputData.personalData[name] = value;
						   			} else if (name === 'email') {
						   				inputData.personalData[name] = value;
						   			} else {
						   				inputData.personalData[name] = value;
						   			}
						   		});

						   		$('#personal-data').remove();
						   		$('#actual-form').append(experienceData);
						   		$('#experience-data').addClass('animated fadeInUp')
						   							 .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
						   							 	var button = $('#professional-button').detach();

						   							 	$('.form_curriculo').append("<center></center>").children("center").append($(button));
						   							 	$('#experience-data').removeClass('animated fadeInUp');

						   							 });
						   });
	});

	$('#professional-button').click(function() {
		$('.form_curriculo').children('center').children('#professional-button').addClass('animated fadeOutRight')
							.one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
								$(this).remove();
							});
		$('#experience-data').addClass('animated fadeOutRight')
							 .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
							 	var idiom = [],
							 		academic = [],
							 		aux = {},
							 		inputs = $('#experience-data').serializeArray();

							 	inputs.forEach(function(input) {
							 		var name = input.name,
							 			value = input.value;

							 		if (name === 'idioma-nome') {
							 			aux.idioma = value;
							 		} else if (name === 'idioma-compreende') {
							 			aux.compreensao = value;
							 		} else if (name === 'idioma-fala') {
							 			aux.fala = value;
							 		} else if (name === 'idioma-escrita') {
							 			aux.escrita = value;
							 			idiom.push(aux);
							 			aux = {};
							 		} else if (name === 'ensino-nivel') {
							 			aux.nivel = value;
							 		} else if (name === 'ensino-status') {
							 			aux.status = value;
							 		} else if (name === 'ensino-curso') {
							 			aux.curso = value;
							 		} else if (name === 'ensino-universidade') {
							 			aux.universidade = value;
							 		} else if (name === 'ensino-conclusao') {
							 			aux.conclusao = value;
							 			academic.push(aux);
							 			aux = {};
							 		}
							 	});

							 	inputData.experienceData = {
							 		idiomas: idiom,
							 		formacao: academic
							 	};
							 	
							 	$('#experience-data').remove();
							 	$('#actual-form').append(professionalData);
							 	$('#professional-data').addClass('animated fadeInUp')
							 						   .one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function() {
							 						   		var button = $('#gerar-curriculo').detach();
							 						   		$('.form_curriculo').children('center').append($(button))
							 						   		$('#professional-data').removeClass('animated fadeInUp');
							 						   });
							 });
	});

	$('#gerar-curriculo').click(function() {
		var professionalExperience = [],
			complementaryCourses = [],
			aux = {},
			city = {},
			inputs = $('#professional-data').serializeArray(),
			currentLine = 0;

			console.log(JSON.stringify(inputs));

			inputs.forEach(function(input) {
				var name = input.name,
					value = input.value;

				if (name === 'empresa') {
					aux.empresa = value;
				} else if (name === 'cargo') {
					aux.cargo = value;
				} else if (name === 'periodo-inicio') {
					aux.periodoIncio = value;
				} else if (name === 'periodo-fim') {
					aux.periodoFim = value;
				} else if (name === 'trabalho-observacao') {
					aux.observacao = value;
					professionalExperience.push(aux);
					aux = {};
				} else if (name === 'complementar-curso') {
					console.log('Entrou em complementar-curso');
					aux.curso = value;
				} else if (name === 'complementar-horas') {
					aux.horas = value;
				} else if (name === 'complementar-periodo') {
					aux.period = value;
				} else if (name === 'complementar-observacao') {
					aux.observacao = value;
					complementaryCourses.push(aux);
					aux = {};
				} else if (name === 'cidade') {
					city.nome = value;
				} else if (name === 'data') {
					city.data = value;
				}
			});

		inputData.professionalData = {
			professionalExperience: professionalExperience,
			complementaryCourses: complementaryCourses,
			city: city
		};

		var doc = new jsPDF();
		doc.setFont('helvetica');

		curriculumPersonalData(doc, inputData.personalData, currentLine);
		curriculumExperienceData(doc, inputData.experienceData, currentLine);
		curriculumProfessionalData(doc, inputData.professionalData, currentLine);

		doc.save('curriculo.pdf');
	});

	var experienceData   = $('#experience-data').detach(),
		professionalData = $('#professional-data').detach();
});

var curriculumPersonalData = function(doc, personal_data) {
	console.log(JSON.stringify(personal_data));

	doc.setFontType('bold');
	doc.setFontSize(24);
	doc.text(10, 20, personal_data.nome);

	doc.setFontType('normal');
	doc.setFontSize(12);
	doc.text(10, 30, 'Nacionalidade: ' + personal_data.nacionalidade);
	doc.text(70, 30, 'Idade: ' + personal_data.idade + ' ');
	doc.text(10, 35, 'Estado Civil: ' + personal_data.estadoCivil);
	doc.text(70, 35, 'Filhos: ' + (personal_data.filhos > 0 ? personal_data.filhos + ' Filho(s) ' : 'Não possui filhos. '));
	doc.text(10, 40, 'Telefone: ' + personal_data.telefone);
	doc.text(70, 40, 'Celular: ' + personal_data.celular);
	doc.text(10, 45, 'Endereço: ' + personal_data.endereco);	
	doc.text(10, 50, 'e-mail: ' + personal_data.email);

	doc.setFontType('bold');
	doc.setFontSize(24);
	doc.text(10, 70, 'Objetivo')

	doc.setFontSize(12);
	doc.setFontType('normal');
	if (personal_data.objetivo.length > 100) {
		currentLine = 80,
			temp = personal_data.objetivo;

		while (temp.length >= 100) {
			doc.text(10, currentLine, temp.substr(0, 99));
			temp = temp.slice(100, temp.length);
			currentLine += 5;
		}

		if (temp) {
			doc.text(10, currentLine, temp);
		}
	} else {
		doc.text(10, 80, personal_data.objetivo);
		currentLine = 80;
	}	
};

var curriculumExperienceData = function(doc, experience_data) {
	var idiomas = experience_data.idiomas,
		formacao = experience_data.formacao;

	doc.setFontSize(24)
	doc.setFontType('bold');
	doc.text(10, currentLine + 20, 'Idiomas');
	doc.setFontSize(12);
	doc.setFontType('normal');
	currentLine += 30;
	idiomas.forEach(function(idioma) {
		doc.text(10, currentLine, 'Idioma: ' + idioma.idioma);
		doc.text(45, currentLine, 'Compreensão: ' + idioma.compreensao);
		doc.text(95, currentLine, 'Fala: ' + idioma.fala);
		doc.text(120, currentLine, 'Escreve: ' + idioma.escrita);
		currentLine += 5;
	});

	currentLine += 15;

	doc.setFontSize(24);
	doc.setFontType('bold');
	doc.text(10, currentLine, 'Formação');
	doc.setFontSize(12);
	doc.setFontType('normal');
	currentLine += 10;
	formacao.forEach(function(curso) {
		doc.text(10, currentLine, 'Nível: ' + curso.nivel);
		doc.text(45, currentLine, 'Status: ' + curso.status);
		doc.text(80, currentLine, 'Curso: ' + curso.curso);
		doc.text(10, currentLine + 5, 'Universidade: ' + curso.universidade);
		doc.text(80, currentLine + 5, 'Conclusão: ' + curso.conclusao);
		currentLine += 15;
	});

};

var curriculumProfessionalData = function(doc, professional_data) {
	console.log(JSON.stringify(professional_data));

	var profissionais = professional_data.professionalExperience,
		complementares = professional_data.complementaryCourses,
		cidade = professional_data.city;

	currentLine = 20;

	doc.addPage('a4', 'r')
	doc.setFontSize(24);
	doc.setFontType('bold');
	doc.text(10, currentLine, 'Experiência Profissional');
	doc.setFontSize(12);
	doc.setFontType('normal');
	currentLine += 10;
	profissionais.forEach(function(profissao) {
		doc.text(10, currentLine, 'Empresa: ' + profissao.empresa);
		doc.text(80, currentLine, 'Cargo: ' + profissao.cargo);
		doc.text(10, currentLine + 5, 'Início: ' + profissao.periodoIncio);
		doc.text(50, currentLine + 5, 'Fim: ' + profissao.periodoFim);
		doc.text(10, currentLine + 10, 'Observação: ' + profissao.observacao);
		currentLine += 25;
	});

	currentLine += 20;
	doc.setFontSize(24);
	doc.setFontType('bold');
	doc.text(10, currentLine, 'Cursos Complementares');
	doc.setFontSize(12);
	doc.setFontType('normal');
	currentLine += 10;
	complementares.forEach(function(curso) {
		doc.text(10, currentLine, 'Curso: ' + curso.curso);
		doc.text(60, currentLine, 'Horas: ' + curso.horas);
		doc.text(90, currentLine, 'Período: ' + curso.period);
		doc.text(10, currentLine + 5, 'Observação: ' + curso.observacao);
		currentLine += 15;
	});

	doc.setFontSize(16);
	doc.text(80, currentLine + 50, cidade.nome + ', ' + cidade.data);
};