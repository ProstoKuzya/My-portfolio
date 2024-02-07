// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (let i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll(".dropdown").forEach(function(dropDownWrapper){
	
	const dropDownButton = dropDownWrapper.querySelector(".dropdown__button");
	const dropDownLis = dropDownWrapper.querySelector(".dropdown__list");
	const AllDropDownListItem = dropDownLis.querySelectorAll(".dropdown__list-item");
	const dropDownInput = dropDownWrapper.querySelector(".dropdown__input-hidden")
	
	//Клік по кнопкі . окрить/закрить select , добавлення клса для фокуса на select
	dropDownButton.addEventListener("click", function(){
		dropDownLis.classList.toggle("dropdown__list--visible");
		this.classList.add("dropdown__button--active")
	});
	
	// Вибрать елемент зі списку , запомниь вибране значеня. Закрить дропдаун
	AllDropDownListItem.forEach(function(item){
		item.addEventListener("click",function(e){
			e.stopPropagation();
			dropDownButton.textContent = this.textContent;
			dropDownButton.focus();
			dropDownInput.value = this.dataset.value;
			dropDownLis.classList.remove("dropdown__list--visible");
		})
	})
	
	// Закриє дропдаунт коли проізовшов клік за прідєлом кнопки дропдауна
	document.addEventListener("click", function(e){
		if(e.target !== dropDownButton){
			dropDownButton.classList.remove("dropdown__button--active")
			dropDownLis.classList.remove("dropdown__list--visible");
		}
	})
	
	// Закриє дропдаунт коли проізовшов клік на клавішу таб або ескєйп
	document.addEventListener("keydown", function(e){
		if(e.key == "Tab" || e.key == "Escape"){
			dropDownButton.classList.remove("dropdown__button--active")
			dropDownLis.classList.remove("dropdown__list--visible");
		}
	})
})


