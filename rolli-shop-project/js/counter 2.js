const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function(event){

	let counter ;

	if(event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
		const parentNode = event.target.closest(".counter-wrapper");
		counter = parentNode.querySelector("[data-counter]");
	}

	if(event.target.dataset.action === "plus"){
		++counter.innerText 

	}else if(event.target.dataset.action === "minus"){

		if (parseInt(counter.innerText) > 1 ) {
			--counter.innerText
		} else if(event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1){
			event.target.closest(".cart-item").remove()

			toggleCartStatus()

			culcCurtPrice()
		}
	}

	if(event.target.hasAttribute("data-cart")){

		const card = event.target.closest(".card")

		const newCard = {
			id: card.dataset.id,
			img: card.querySelector(".product-img").src,
			title: card.querySelector(".item-title").innerText,
			qntity: card.querySelector(".text-muted").innerText,
			counter: card.querySelector("[data-counter]").innerText,
			weight: card.querySelector(".price__weight").innerText,
			price: card.querySelector(".price__currency").innerText,
		}

		const cardId = cartWrapper.querySelector(`[data-id="${newCard.id}"]`)

		if(cardId){
			const counterEl = cardId.querySelector("[data-counter]");
			counterEl.innerText = parseInt(counterEl.innerText) + parseInt(newCard.counter)
		}else{
			const cardHTML = 
			`<div class="cart-item" data-id="${newCard.id}">
				<div class="cart-item__top">
					<div class="cart-item__img">
						<img  src="${newCard.img}" alt="">
					</div>
					<div class="cart-item__desc">
						<div class="cart-item__title">${newCard.title}</div>
						<div class="cart-item__weight">${newCard.qntity}/${newCard.weight}</div>
						<div class="cart-item__details">
							<div class="items items--small counter-wrapper">
								<div class="items__control" data-action="minus">-</div>
								<div class="items__current" data-counter="">${newCard.counter}</div>
								<div class="items__control" data-action="plus">+</div>
							</div>
							<div class="price">
								<div class="price__currency">${newCard.price}</div>
							</div>
						</div>
					</div>
				</div>
			</div>`

			cartWrapper.insertAdjacentHTML("beforeend", cardHTML)

			

			
		}

		card.querySelector("[data-counter]").innerText = "1"

		toggleCartStatus()
		
		culcCurtPrice()
	}

	if(event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")){
		culcCurtPrice()
	}
})

function toggleCartStatus(){

	const emptyListBage = document.querySelector("[data-cart-empty]");
	const orderForm = document.getElementById("order-form")

	if(cartWrapper.children.length > 0) {
		emptyListBage.classList.add("none")
		orderForm.classList.remove("none")
	}else{
		emptyListBage.classList.remove("none")
		orderForm.classList.add("none")
	}
}
