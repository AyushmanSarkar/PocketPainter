import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'ayushmansarkaredu@gmail.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">PocketPainter</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online image editor."},
				{title: "Author:", value: 'AyushmanS'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub:", html: '<a href="https://github.com/ayushmansarkar/PocketPainter">https://github.com/ayushmansarkar/PocketPainter</a>'},
				{title: "Website:", html: '<a href="https://ayushmansarkar.github.io/PocketPainter/">https://ayushmansarkar.github.io/PocketPainter/</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
