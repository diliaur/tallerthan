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
{ "Radhouane Charbib":7.75 }
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

		let desc = "Enter your height in feet and inches.";
		if (height > min_height) {
			document.getElementById('directions').innerText = desc;
			while (height <= Object.values(person)[0]) {
				random = Math.floor(Math.random() * celeb_heights.length);
				person = celeb_heights[random];
			}
			// print it to the #result div
			document.getElementById('result').innerText = Object.keys(person)[0];
		} else {
			document.getElementById('directions').innerText = "Please enter a height greater than " + min_height + " feet.";
		}

	});

});