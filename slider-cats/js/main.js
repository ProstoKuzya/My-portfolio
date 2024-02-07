/* обгортка слайдера */

const slider = document.querySelector("#slider");

/*нашли всі слайди і привратили їх в масів */

const sliderItems = Array.from(slider.children);

/*кнопка вперед */

const btnNext = document.querySelector("#btnNext");

const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function(slide, index){

/*создали дата атрібут всім слайдам data-index і присвоїли йому індекс елємєнта в місіві*/

	slide.dataset.index = index

/*добавляєм для первоо в даний момент активного слада дата атрибуть data-active, setAttribute добаве в нашому случаї
до первого слада дата атрібут , в setAttribute обізатєльно нада перердавать значеніє для дата атрібута, тому тут ми 
передали просто пусту строку */

sliderItems[0].setAttribute("data-active", "")
/*єсли індекс елємєнта не дорівнює 0 то всі остальні слайди скриваєм , таким образом ми показали лише первий слайд */

	if(index !== 0){
		slide.classList.add("hidden");
	}

	slide.addEventListener("click", function(){

		/* скрив всі слайди  */

		slide.classList.add("hidden");

		/* удалили всі атрібути з назвою  data-active*/

		slide.removeAttribute("data-active")
		/*создали перємєнну якійв подальшому присваювали індекс*/

		let nextSlideIndex

/* єсли індекс елємєнта якому додали 1 дорівнює кількості всіх елємєнтів в масіві ми присваюєм перємєнній 0
наприклад єсли в нас всьго 3 слайди і коли індекс дорівнює 3 а до нього додають ще 1 то він начинається з 0 , суть в тому 
шо індекс начнається з нуля і в кінці 3 слайд має індекс 2 а якраз таки кількість length буде 3 , тому коли індекс починає
дорівнювати 3 сробатує условіє і ми показуєм первий слайд, якщо н іто ми переключаєм на наступний слайд  */

		if(index + 1 === sliderItems.length){
			nextSlideIndex = 0 
		}else{
			nextSlideIndex = index + 1; 
		}

/*тут ми шукаєм елемєнт у якого є атрібут data-index з значенієм індекса якого ми розщитали вище в if else условії
тобіж індекс слєдущого слайда який нада відобразить і після чого як тіки ві був найденить то ми показуєм його*/

		const nexSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
		nexSlide.classList.remove("hidden")
		
		/* тут добавили до слєдущого слайду атрібут data-active */

		nexSlide.setAttribute("data-active", "")
	})
})

btnNext.addEventListener("click", function(){
	const currentSlide = slider.querySelector("[data-active]");
	const currentSlideIndex = +currentSlide.dataset.index;

	currentSlide.classList.add("hidden")
	currentSlide.removeAttribute("data-active")

	let nextSlideIndex

	if(currentSlideIndex + 1 === sliderItems.length){
		nextSlideIndex = 0 
	}else{
		nextSlideIndex = currentSlideIndex + 1; 
	}

	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
	nextSlide.classList.remove("hidden")
	nextSlide.setAttribute("data-active", "")

})

btnPrev.addEventListener("click", function(){
	const currentSlide = slider.querySelector("[data-active]");
	const currentSlideIndex = +currentSlide.dataset.index;

	currentSlide.classList.add("hidden")
	currentSlide.removeAttribute("data-active")

	let nextSlideIndex

	if(currentSlideIndex === 0){
		nextSlideIndex = sliderItems.length - 1
	}else{
		nextSlideIndex = currentSlideIndex - 1 
	}

	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
	nextSlide.classList.remove("hidden")
	nextSlide.setAttribute("data-active", "")
})