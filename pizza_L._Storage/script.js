// const addItemsForm = document.querySelector('.add-items-form');
//     const itemsList = document.querySelector('.items-list');
//     const items = JSON.parse(localStorage.getItem('items')) || [];

//     function addItem(e) {
// 		e.preventDefault();
// 		const text = e.target.item.value;
// 		console.log(text)
// 		const item = {
//         text,
//         checked: false
//     }

//     items.push(item);
//     localStorage.setItem('items', JSON.stringify(items));
//     displayItems(items, itemsList);
//     this.reset();
//     };

// function displayItems(ingredients, ingredientsList) {

//     ingredientsList.innerHTML = ingredients.map((ingredient, index) => {
//         return `<li><input type='checkbox' id=item${index} data-index='${index}' ${ingredient.checked ? 'checked' : ''}/>
//         <label for='item${index}'>${ingredient.text}</label>
//         </li>`
//     }).join('');
// };


// function toggleClick(e) {
//     if (!e.target.matches('input')) return;

//     const element = e.target.dataset.index;
//     items[element].checked = !items[element].checked;
//     localStorage.setItem('items', JSON.stringify(items));
//     displayItems(items, itemsList);
// }



//     addItemsForm.addEventListener('submit', addItem);
//     itemsList.addEventListener('click', toggleClick);
//     displayItems(items, itemsList);





// const addItemsForm = document.querySelector('.add-items-form');
// const itemsList = document.querySelector('.items-list');
// const items = [];

// addItemsForm.addEventListener("submit", addItems)
// itemsList.addEventListener("click", toggleClick)

// function addItems(event){

// 	event.preventDefault()
// 	const textInput = event.target.item.value

// 	const item = {
// 		text: textInput,
// 		checked: false,
// 	}
	
// 	items.push(item)
// 	displayItem(items, itemsList)
// 	this.reset()
// }

// function displayItem(ingredients, ingredientsList){
// 	ingredientsList.innerHTML = ingredients.map(function(ingredient, index){
// 		return `
// 				<li>
// 					<input type="checkbox" id="item${index}" data-index="${index}" ${ingredient.checked ? "checked" : ""}>
// 					<label for="item${index}">${ingredient.text}</label>
// 				</li>
// 				`
// 	}).join("")
// }

// function toggleClick(event){
// 	if(!event.target.matches("input")) return
// 	const element = event.target.dataset.index
// 	items[element].checked = !items[element].checked
// 	displayItem(items, itemsList)
// }





const addItemsForm = document.querySelector('.add-items-form');
const itemsList = document.querySelector('.items-list');
const items = JSON.parse(localStorage.getItem("items")) || [];

addItemsForm.addEventListener("submit", addItems);
itemsList.addEventListener("click", toggleClick)

function addItems(event){
	event.preventDefault()

	const inputValue = event.target.item.value

	const item = {
		text: inputValue,
		chacked: false,
	}

	items.push(item)
	displayItem(items, itemsList)
	localStorage.setItem("items", JSON.stringify(items))
	this.reset()
}

function displayItem(ingridients, ingridientsList){
	ingridientsList.innerHTML = ingridients.map(function(ingridient, index){
		return `<li>
					<input type="checkbox" id="item${index}" data-index="${index}" ${ingridient.chacked ? "checked" : ""}>
					<label for="item${index}">${ingridient.text}</label>
				</li>`
	}).join("")

}

function toggleClick(event){
	if(!event.target.matches("input")) return
	const element = event.target.dataset.index
	items[element].chacked = !items[element].chacked
	localStorage.setItem("items", JSON.stringify(items))
	displayItem(items, itemsList)
}
displayItem(items, itemsList)