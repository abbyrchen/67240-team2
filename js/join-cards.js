var cooler = document.getElementById('cooler');

var job = document.getElementById('job');

var people = document.getElementById('people');

var butt = document.getElementById('butt');

// These event listeners are used for all of the skills sections. When it is moused
// over, it calls the function that makes the image more prominent and when the
// mouse leaves, it calls the function that makes the text more prominent. 
cooler.addEventListener('mouseout', function() {showFront('cooler')});
cooler.addEventListener('mouseover', function() {showBack('cooler')});

job.addEventListener('mouseout', function() {showFront('job')});
job.addEventListener('mouseover', function() {showBack('job')});

people.addEventListener('mouseout', function() {showFront('people')});
people.addEventListener('mouseover', function() {showBack('people')});

butt.addEventListener('mouseout', function() {showFront('butt')});
butt.addEventListener('mouseover', function() {showBack('butt')});

// This function makes the image the brightest element by changing it's opacity
// to one and making the text disappear. This occurs when the div is moused over.
function showFront(section) {
	let front = document.getElementsByClassName(section + '-front')[0];
	let back = document.getElementsByClassName(section + '-back')[0];
	front.style.visibility = 'visible';
	back.style.visibility = 'hidden';
}

// This function makes the text the brightest element by making it visible. For this
// website I didn't take the img opacity all the way to zero, but it is reduced in 
// this form when the mouse isn't hovering.
function showBack(section) {
	let front = document.getElementsByClassName(section + '-front')[0];
	let back = document.getElementsByClassName(section + '-back')[0];
	front.style.visibility = 'hidden';
	back.style.visibility = 'visible';
	console.log('back')
}