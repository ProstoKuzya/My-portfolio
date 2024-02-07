const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];
let questionsIndex = 0;
let score = 0;

const header = document.querySelector("#header");
const list = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

clearPege();
showQuestion();
submitBtn.addEventListener("click", checkAnsfer);

function clearPege(){
	header.innerHTML = "";
	list.innerHTML = "";
	
}
function showQuestion(){

	const headerTemplate = `<h2 class="title">%title%</h2>`;

	const title = headerTemplate.replace("%title%", questions[questionsIndex]["question"]);

	header.innerHTML = title;
	let answerNumber = 1;
	for(answerText of questions[questionsIndex]["answers"]){
		
		const listTemplate = 
		`
			<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>
		`;
		let answerHTML = listTemplate
								.replace("%answer%", answerText)
								.replace("%number%", answerNumber);

		list.innerHTML += answerHTML;
		answerNumber++;
	}
}
function checkAnsfer(){
	const inputChecked = list.querySelector("input[type='radio']:checked")
	
	if(!inputChecked){
		submitBtn.blur();
		return;
	}
	
	const userAnsfer = parseInt(inputChecked.value);

	if(userAnsfer === questions[questionsIndex]["correct"]){
		score++
	}

	if(questionsIndex !== questions.length - 1){
		questionsIndex++
		clearPege();
		showQuestion();
		return
	}else{
		clearPege();
		showResults()
	}
	
}
function showResults(){

	const resultsTamplate = 
	`
	<h2 class="title">%title%</h2>
	<h3 class="summary">%message%</h3>
	<p class="result">%result%</p>
	`
	let title, message;

	if(score === questions.length){
		title = "Вітаю!"
		message = "Ви відповіли на всі вопроси правельно!"
	} else if((score * 100) / questions.length >= 50){
		title = "Непоганий результат!"
		message = "Ви дали більше половини правельних відповідей"
	} else {
		title = "Варто постаратися"
		message = "Поки в Вас менше половини правельних відповідей"
	}

	const result = `${score} з ${questions.length}`

	const finalMasage = resultsTamplate
								.replace("%title%", title)
								.replace("%message%", message)
								.replace("%result%", result);

	header.innerHTML = finalMasage;

	submitBtn.blur();
	submitBtn.innerText = "Почати заново"
	submitBtn.addEventListener("click", function(){
		history.go()
	})
}