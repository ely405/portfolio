 'use strict';

 const proyectDetail = (element) => {
 	let row = $(' <div class="row container valign-wrapper justify-center flex-wrap"></div>');
 	element.map(e => {
 		const {
 			title,
 			imgSrc,
 			imgAlt,
 			detail,
 			urlDemo,
 			urlGithub,
 			icons,
 			projectFeature
 		} = e;
 		let list = $('<ul class="valign-wrapper justify-around flex-wrap"></ul>');
 		icons.map(icon => {
 			let iconLi = $(`<li class="contact-li valign-wrapper justify-center">
                            <i class="${icon} grey-text"></i>
                        </li>`);
 			list.append(iconLi);
 		});

 		let projectFeatureList = $('<ul class=""></ul>');
 		projectFeature.map(feature => {
 			let featureLi = $(`<li class="contact-li grey-text">
																	<i class="fas fa-check"></i> ${feature}
																</li>`);
 			projectFeatureList.append(featureLi);
 		})

 		let container = $('<div class="col m6"></div>');
 		let card = $('<div class="card card-project"></div>')
 		let img = $(`<div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src=${imgSrc} alt=${imgAlt}
                    </div>`);
 		let cardContent = $(`<div class="card-content row">
																<span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
																<div class="col s12 valign-wrapper justify-around">
																	<a class="btn waves-effect" href="${urlGithub}" target="_blank"><i class="fab fa-github"></i> <strong class="hide-on-med-and-down">Github</strong></a>
																	<a class="btn waves-effect" href="${urlDemo}" target="_blank"><i class="fa fa-external-link-alt"></i> <strong class="hide-on-med-and-down">Demo</strong></a>
																</div>
                            </div>`);
 		let cardReveral = $(`<div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                                <p class="grey-text">${detail}</p>     
                            </div>`);
 		cardReveral.append(projectFeatureList, list);
 		container.append(card.append(img, cardContent, cardReveral));
 		row.append(container);
 	});
 	return row;
 }

 const portfolioDetail = [{
 	title: 'LabCar',
 	imgAlt: 'LabCar aplicación para pedir taxi',
 	imgSrc: 'assets/img/labCar.png',
 	detail: 'Es una aplicación que te permite pedir un taxi cuando quieras y en donde quieras, el diseño es responsivo',
 	urlDemo: 'https://ely405.github.io/labCar/',
 	urlGithub: 'https://github.com/ely405/labCar',
 	icons: ['fab fa-js-square fa-3x', 'fab fa-html5 fa-3x', 'fab fa-css3-alt fa-3x', 'icon-bootstrap ico-3x'],
 	projectFeature: ['Responsive design', 'First mobile', 'Uso del framework Bootstrap', 'Conexión con el API de google']
 }, {
 	title: 'Freelancer',
 	imgAlt: 'Start Bootstrap plantilla de portafolio',
 	imgSrc: 'assets/img/startBootstrap.png',
 	detail: `Freelancer es un tema de Bootstrap, en ésta réplica el diseño se realiza con flex-box, diseño responsivo`,
 	urlDemo: 'https://ely405.github.io/start-boostrap/',
 	urlGithub: 'https://github.com/ely405/start-boostrap',
 	icons: ['fab fa-js-square fa-3x', 'fab fa-css3-alt fa-3x', 'fab fa-html5 fa-3x'],
 	projectFeature: ['Realizar la réplica sin framework CSS', 'Usar CSS flexbox']
 }, {
 	title: 'Chat',
 	imgAlt: 'Chat con firebase',
 	imgSrc: 'assets/img/chat.png',
 	detail: `Es una aplicación con la que te puedes comunicar con varias personas a la vez.`,
 	urlDemo: 'https://chat-59585.firebaseapp.com/',
 	urlGithub: 'https://github.com/ely405/chat-react-firebase',
 	icons: ['fab fa-js-square fa-3x', 'fab fa-react fa-3x', 'icon-firebase ico-5x', 'icon-webpack ico-3x', 'fab fa-css3-alt fa-3x'],
 	projectFeature: ['Single Page Application, usamos React js',
 		'Reutilizar componentes',
 		'Conexión con la base de datos de Firebase',
 		'Uso de herramientas de automatización (Webpack)',
 		'Uso de framework Bootstrap'
 	]
 }, {
	 title: 'E-commerce',
	 imgAlt: 'Foto de la página E-commerce',
	 imgSrc: 'assets/img/e-commerce.png',
	 detail: 'E-commerce es una aplicación en la que podrás encontrar los productos a los mejores precios! ',
	 urlDemo: 'https://ely405.github.io/e-commerce',
	 urlGithub: 'https://github.com/ely405/e-commerce',
	 icons: ['fab fa-js-square fa-3x', 'fab fa-react fa-3x', 'icon-redux ico-3x', 'fab fa-css3-alt fa-3x'],
	 projectFeature: [
		 'Single Page Application, usamos React js',
		 'Manejo del estado con redux',
	 ]
 }]

 $('#rootPortfolio').append(proyectDetail(portfolioDetail));