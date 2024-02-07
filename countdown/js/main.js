const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCounter(){
	const currentTime = new Date();
	const different = newYear - currentTime;
	
	const daysLeft = Math.floor( different / 1000 / 60 / 60 / 24 );
	const hoursLeft = Math.floor( different / 1000 / 60 / 60 ) % 24;
	const minutesLeft = Math.floor( different / 1000 / 60 ) % 60;
	const secondsLeft = Math.floor( different / 1000 ) % 60;
	
	days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft ;
	hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft ;
	minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft ;
	seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft ;
	
}
setInterval(updateCounter, 1000);
setTimeout(function(){
	countdown.style.display = "flex";
	preloader.remove()
}, 1000);