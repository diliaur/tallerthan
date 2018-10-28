// bring the csv in as an object

var celeb_heights = [
{ "Verne Troyer":2.67 },
{ "Emmanuel Lewis":3.33 },
{ "Matthew Roloff":4.17 },
{ "Zelda Rubinstein":4.25 },
{ "Mighty Mike Murga":4.25 },
{ "Jason Acuña":4.5 },
{ "Gary Coleman":4.67 },
{ "Linda Hunt":4.75 },
{ "Lil’ Kim":4.92 },
{ "Danny DeVito":5.0 },
{ "Janeane Garofalo":5.08 },
{ "Paul Williams":5.17 },
{ "Paula Abdul":5.17 },
{ "Dudley Moore":5.21 },
{ "Julia Louis-Dreyfus":5.21 },
{ "Prince":5.25 },
{ "Ashley Olsen":5.25 },
{ "Rachel Bilson":5.33 },
{ "Seth Green":5.33 },
{ "Raven Symoné":5.38 },
{ "Michael J. Fox":5.42 },
{ "Jennifer Aniston":5.42 },
{ "Elijah Wood":5.5 },
{ "Penélope Cruz":5.5 },
{ "Henry Winkler":5.54 },
{ "Farrah Fawcett":5.54 },
{ "Oprah Winfrey":5.58 },
{ "Tom Cruise":5.58 },
{ "Sandra Bullock":5.62 },
{ "Ben Stiller":5.67 },
{ "Angelina Jolie":5.67 },
{ "Don Cheadle":5.71 },
{ "Catherine Zeta-Jones":5.71 },
{ "Paul Newman":5.75 },
{ "Joan Cusack":5.75 },
{ "Matt Damon":5.79 },
{ "Heidi Klum":5.79 },
{ "Colin Farrell":5.83 },
{ "Katie Holmes":5.83 },
{ "Nicole Kidman":5.88 },
{ "George Clooney":5.92 },
{ "Gisele Bundchen":5.92 },
{ "Brad Pitt":5.96 },
{ "Denzel Washington":6.0 },
{ "Geena Davis":6.0 },
{ "Vin Diesel":6.08 },
{ "Jim Carrey":6.17 },
{ "John Cusack":6.21 },
{ "Bernie Mac":6.21 },
{ "Paul Walker":6.25 },
{ "Gabrielle Reece":6.25 },
{ "Will Ferrell":6.29 },
{ "Ruben Studdard":6.33 },
{ "Conan O’Brien":6.38 },
{ "Vince Vaughn":6.42 },
{ "Lisa Leslie":6.42 },
{ "Mark Curry":6.5 },
{ "James Arness":6.58 },
{ "Richard Moll":6.67 },
{ "Brad Garrett":6.71 },
{ "Ted Cassidy":6.75 },
{ "Shaquille O’Neal":7.08 },
{ "André The Giant":7.12 },
{ "Richard Kiel":7.17 },
{ "Peter Mayhew":7.25 },
{ "Sandy Allen":7.25 },
{ "Gheorghe Muresan":7.58 },
{ "Radhouane Charbib":7.75 },
{ "Brad Garrett":6.67 },
{ "Armie Hammer":6.42 },
{ "Joel McHale":6.33 },
{ "Vince Vaughn":6.42 },
{ "Jeff Goldblum":6.33 },
{ "Dwayne Johnson":6.42 },
{ "John Corbett":6.42 },
{ "Tyler Perry":6.42 },
{ "Clint Eastwood":6.33 },
{ "Tim Robbins":6.42 },
{ "Josh Duhamel":6.33 },
{ "Jason Momoa":6.33 },
{ "Ben Affleck":6.33 },
{ "Will Ferrell":6.25 },
{ "Alexander Skarsgård":6.33 },
{ "Jason Segel":6.33 },
{ "Chevy Chase":6.33 },
{ "John Lithgow":6.33 },
{ "John Mayer":6.25 },
{ "Conan O’Brien":6.33 },
{ "Joe Manganiello":6.42 },
{ "Taylor Swift":5.92 },
{ "Mandy Moore":5.83 },
{ "Rebecca Romijn":5.92 },
{ "Maria Sharapova":6.17 },
{ "Tyra Banks":5.92 },
{ "Brooke Shields":6.0 },
{ "Nicole Kidman":5.92 },
{ "Gisele Bundchen":5.92 },
{ "Blake Lively":5.83 },
{ "Jane Lynch":6.0 },
{ "Khloe Kardashian":5.83 },
{ "Angelica Huston":5.08 },
{ "Jordin Sparks":5.83 },
{ "Uma Thurman":5.92 },
{ "Sigourney Weaver":5.92 },
{ "Hilary Duff":5.17 },
{ "Kim Kardashian":5.17 },
{ "Anna Kendrick":5.17 },
{ "Amy Poehler":5.17 },
{ "Kourtney Kardashian":5.0 },
{ "Hayden Panettiere":5.17 },
{ "Lady Gaga":5.08 },
{ "Vanessa Hudgens":5.08 },
{ "America Ferrera":5.08 },
{ "Kylie Minogue":5.0 },
{ "Dolly Parton":5.0 }
];

// Object.keys(celeb_heights).forEach( function(key) {
// 	console.log(celeb_heights[key]);
// })

// for (let i = 0; i < celeb_heights.length; i++) {
// 	console.log(celeb_heights[i]);
// }

$(document).ready( function() {
	// event listener for button click
	document.getElementById('submit').addEventListener('click',function(){
		
		document.getElementById('result').innerText = ""; // clear when hit button
		document.getElementById('directions').innerHTML = "<strong>See which famous people you're taller than.</strong><br/>Enter your height in feet and inches.";
		let height = 0;

		let feet_box = document.getElementById('height-feet');
		let inch_box = document.getElementById('height-inches');

		// get the values in the boxes, if no value ea will be 0

		let height_ft = Number(feet_box.value); // converts or returns NaN
		let height_in = Number(inch_box.value); // converts or returns NaN

		// check if they're numbers, otherwise print an error message (or sth)
		if (height_ft != NaN) {
			height += height_ft;
		}
		if (height_in != NaN) {
			height += height_in / 12; // convert to feet in decimals
		}

		// console.log(height);

		// choose random from heights

		let random = Math.floor(Math.random() * celeb_heights.length);
		
		let person = celeb_heights[random];

		let min_height = 2.67;

		console.log()

		let desc = document.getElementById('directions').innerHTML;
		if (height > min_height) {
			document.getElementById('directions').innerHTML = desc;
			while (height <= Object.values(person)[0]) {
				random = Math.floor(Math.random() * celeb_heights.length);
				person = celeb_heights[random];
			}
			// print it to the #result div
			document.getElementById('result').innerText = Object.keys(person)[0];
		} else {
			document.getElementById('directions').innerText = "Please enter a height greater than " + String(min_height).split('.')[0] + "\'" + String(Math.trunc(Number("0."+String(min_height).split('.')[1])*12)) + "\".";
		}

	});

});