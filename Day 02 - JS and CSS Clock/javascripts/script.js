const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

const h = document.querySelector('.hours');
const m = document.querySelector('.minutes');
const s = document.querySelector('.seconds');
const t = document.querySelector('.time');

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

	if(hours < 10) {
		h.innerHTML = '0' + hours;
	} else {
		h.innerHTML = hours;
	}
	if(minutes < 10) {
		m.innerHTML = '0' + minutes;
	} else {
		m.innerHTML = minutes;
	}
	if(seconds < 10) {
		s.innerHTML = '0' + seconds;
	} else {
		s.innerHTML = seconds;
	}
	if(now.getHours() > 12) {
		t.innerHTML = 'PM';
	} else {
		t.innerHTML = 'AM';
	}

}

setInterval(setDate, 1000);

setDate();