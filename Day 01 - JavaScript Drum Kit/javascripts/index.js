function playSound (event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if(!audio) return;
	// console.log(audio.currentTime);
	audio.currentTime = 0; // Revind to start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(event) {
	if(event.propertyName !== 'transform') {
		return;
	}
	console.log(event);
	event.target.classList.remove('playing');
	// this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);