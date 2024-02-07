// Скрыть/Открыть блок
// const button = document.querySelector("#button");
// const text = document.querySelector("#content");
// button.addEventListener("click", () => {
// 	if (text.classList.toggle("content-hidden")) {
// 		button.textContent = "Закрыть блок"
// 	} else {
// 		button.textContent = "Открить блок"
// 	}
// })
const button = document.querySelector("#button");
const content = document.querySelector("#content");
button.addEventListener("click", function () {

	if (content.classList.toggle("content-hidden")) {

		button.textContent = "Открыть блок"
	} else {
		button.textContent = "Закрий цю хуєту"
	}
})