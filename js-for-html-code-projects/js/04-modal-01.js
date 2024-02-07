const button = document.querySelector("[data-modal-button]");
const modal = document.querySelector("[data-modal]");
const btnCLose = document.querySelector("[data-modal-close]")
button.addEventListener("click", function(){
	modal.classList.remove("hidden");
});

btnCLose.addEventListener("click", function(){
	modal.classList.add("hidden");
});
modal.addEventListener("click", function(){
	modal.classList.add("hidden");
})
modal.querySelector(".modal-window").addEventListener("click", function(event){
	event.stopPropagation()
})

