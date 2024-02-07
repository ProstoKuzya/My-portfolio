const tabsButton = document.querySelectorAll("[data-tab]");
const tabsContant = document.querySelectorAll("[data-tab-content]");
tabsButton.forEach(function(item){
	item.addEventListener("click", function(){
		const tabBox = document.querySelector("#" + this.dataset.tab);
		
		tabsContant.forEach(function(item){
			item.classList.add("hidden")
		})
		tabBox.classList.remove("hidden")
	})
})

