function culcCurtPrice(){
	const cartItems = document.querySelectorAll(".cart-item");
	const totalPrice = document.querySelector(".total-price");
	const deliveryCost = document.querySelector(".delivery-cost")
	const cartDelivery = document.querySelector("[data-cart-delivery]")

	let finalPrice = 0;

	cartItems.forEach(function(item){
		
		const amountEl = item.querySelector("[data-counter]");
		const priceEl = item.querySelector(".price__currency");

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		finalPrice += currentPrice;
	})

	totalPrice.innerText = finalPrice

	if(finalPrice > 0){
		cartDelivery.classList.remove("none");
		
	}else{
		cartDelivery.classList.add("none");
	}

	if(finalPrice >= 600){
		deliveryCost.classList.add('free')
		deliveryCost.innerText = "бесплатно"
	}else{
		deliveryCost.classList.remove('free')
		deliveryCost.innerText = "250 ₽"
	}


}