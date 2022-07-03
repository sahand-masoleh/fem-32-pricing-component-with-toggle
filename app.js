const knob = document.querySelector(".toggle__knob");
const input = document.querySelector(".toggle__input");
input.checked = false;
input.addEventListener("change", toggle);
const prices = document.querySelectorAll(".card__price");

function toggle() {
	let { checked } = input;
	if (checked) {
		knob.classList.remove("toggle__knob--right");
		knob.classList.add("toggle__knob--left");
		prices.forEach((e) => {
			let { annually } = e.dataset;
			e.innerText = annually;
		});
	} else {
		knob.classList.remove("toggle__knob--left");
		knob.classList.add("toggle__knob--right");
		prices.forEach((e) => {
			let { monthly } = e.dataset;
			e.innerText = monthly;
		});
	}
}
