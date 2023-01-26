// Variables 

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
	quote: "Who was your first crush, and what were they like?",
	person: "Nicks Mogu"
}, {
	quote: "Can you describe what your first heartbreak was like?",
	person: "Miyang"
}, {
	quote: "What was the biggest lesson from your worst breakup?",
	person: "Nicko"
}, {
	quote: "What's something you used to believe about relationships but no longer do?",
	person: "Nicko"
}];


	let lastQuestion = 0;
	let random = 0;


btn.addEventListener('click', function(){



	/* Generate random number */
		random = Math.floor(Math.random() * quotes.length);

	/* Check's Repeatition */
	while (lastQuestion === random) {
		random = Math.floor(Math.random() * quotes.length);
	}

	/* Display Output to Interface */
		quote.innerText = quotes[random].quote;
		person.innerText = quotes[random].person;
		lastQuestion = random;
});