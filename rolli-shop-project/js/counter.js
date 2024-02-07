const card = document.querySelector(".card")
const counter = card.querySelector(".items__current")

card.addEventListener("click", buttonClick)
function buttonClick(event){
	if(event.target.dataset.action === "minus"){
		if(+counter.innerText === 1){
			return
		}
		counter.innerText = +counter.innerText - 1;
	}else if(event.target.dataset.action === "plus"){
		counter.innerText = +counter.innerText + 1
	}
}