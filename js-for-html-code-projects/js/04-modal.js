// const modalButtonAll = document.querySelectorAll("[data-modal-button]");
// const modalButtonClose = document.querySelectorAll("[data-modal-close]");
// const modalBgAll = document.querySelectorAll("[data-modal]");
// modalButtonAll.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		const modalBox = document.querySelector("#" + this.dataset.modalButton);
// 		modalBox.classList.remove("hidden")

// 		modalBox.querySelector(".modal-window").addEventListener("click", function(e){
// 			e.stopPropagation()
// 		})
// 	})
// })
// modalButtonClose.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		const modalClose = this.closest("[data-modal]")
// 		modalClose.classList.add("hidden");
// 	})
// })

// modalBgAll.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		this.classList.add("hidden");
// 	})
// })


const allButtons = document.querySelectorAll("[data-modal-button]");
const allModal = document.querySelectorAll("[data-modal]");
const allClose = document.querySelectorAll("[data-modal-close]");

allButtons.forEach(function(item){
	item.addEventListener("click", function(){
		const modaContant = document.querySelector("#" + this.dataset.modalButton)
		modaContant.classList.toggle("hidden")

		modaContant.querySelector(".modal-window").addEventListener("click", function(event){
			event.stopPropagation();
		})
	})
})

allClose.forEach(function(item){
	item.addEventListener("click", function(){
		const modalClose = this.closest("[data-modal]");
		modalClose.classList.add("hidden")
	})
})

allModal.forEach(function(item){
	item.addEventListener("click", function(){
		this.classList.add("hidden")
	})
})
















