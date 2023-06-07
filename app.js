const input = document.getElementById("e-mail");
const msg = document.querySelector(".error-msg");
const subscribe = document.getElementById("subscribe");
const dismiss = document.getElementById("dismiss");
const container = document.querySelector(".container");

const singUpForm = document.querySelector(".form-grid");
const successForm = document.querySelector(".success");

const cleanMsg = function () {
	input.classList.remove("error-field");
	msg.style.display = "none";
};
const errorMsg = function () {
	input.classList.add("error-field");
	msg.style.display = "block";
};

const restoreForm = function () {
	singUpForm.classList.remove("hide");
	successForm.style.display = "none";
	input.value = "";
	container.style.width = "50%";
};

const checkEmail = function () {
	const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!input.value) errorMsg();

	if (input.value.match(validRegex)) {
		singUpForm.classList.add("hide");
		successForm.style.display = "block";
		container.style.width = "20%";
	} else errorMsg();
};

subscribe.addEventListener("click", function () {
	checkEmail();
});

input.addEventListener("focus", function (e) {
	e.preventDefault();
	cleanMsg();
});

dismiss.addEventListener("click", function () {
	restoreForm();
});

restoreForm();
