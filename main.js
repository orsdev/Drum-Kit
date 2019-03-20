addListener();

//listen to an event
function addListener() {
	window.addEventListener('keydown', playSound);
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	//stop from playing if null
	if (!audio) {
		return
	};

	//repeat sound immediate, if same key is pressed
	audio.currentTime = 0;

	//call function and add animation to key
	addAnimation(e);
	audio.play();
}


function addAnimation(e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
	removeAnimation();
}

function removeAnimation() {
	const keys = document.querySelectorAll('.key');

	//iterate each element to listen to end of transition
	keys.forEach(k => {

		k.addEventListener('transitionend', function () {

			//remove css styling
			k.classList.remove('playing');

		})
	})
}