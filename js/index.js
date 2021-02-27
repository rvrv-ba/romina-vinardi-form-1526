let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// Regular expression playground:
// https://regexr.com/

// Get the references to all HTML elements that 
// are involved in the process of form-validation
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let ms = document.getElementById('message');

// This is the event-target object:
let fm = document.getElementById('contact-form'); 

// This is the event-handler:
function formValidator(e) {
	e.preventDefault();
	
	// Create 2 empty 'buckets', one for collecting data and 
	// the other for error-messages
	let data = {};
	let errors = [];
	
	// 1. Validating fullname
	if (fn.value) {
		data.fullname = fn.value;
	} else {
		errors.push('Full name has to be added!');
	}
	
	// 2. Validating email
	if (em.value) {
		if (pattern.test(em.value)) {
			data.email = em.value;
		} else {
			errors.push('Invalid email!');
		}

	} else {
		errors.push('Email has to be added!');
	}
    
    // 1. Validating message
	if (ms.value) {
		data.message = ms.value;
	} else {
		errors.push('Please enter your message!');
	}
	
	// 3. Handle the feedback
	if (errors.length === 0) {
		fm.reset();
		// print the data object inside the console
	} else {
		// print errors inside the console
	}
	
	console.log(data, errors);
}

// Registering button for click event
fm.addEventListener('submit', formValidator);