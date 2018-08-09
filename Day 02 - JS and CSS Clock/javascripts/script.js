const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');
// const hand = 

function setDate() {
	/*const secondHand = document.querySelector('.second-hand');
	deg += 6;
	deg = deg % 360;
	secondHand.style.transform = 'rotate(' + deg + 'deg)';
	console.log(deg);*/
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;	

	const hours = now.getHours() % 12;
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);