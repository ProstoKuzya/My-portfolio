// Свайпєр 
new Swiper('.what__slider', {
	// Optional parameters
	loop: false,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-what__arrow.s-button-next',
		prevEl: '.slider-what__arrow.s-button-prev',
	},
	speed: 800,
	breakpoints: {
		1670: {
			slidesPerView: 5,
		},
		1440: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 2,
		},

	}
});

//таймер 
document.addEventListener("DOMContentLoaded", function () {
	let stopTime;

	const secondsFun = (total) => {
		const seconds = Math.floor((total / 1000) % 60);
		const sb = document.querySelector('.timer-special__seconds');

		sb.querySelector('div ul li').innerHTML = (seconds < 10 ? '0' + seconds : seconds);
		let s = 100 - ((100 / 60) * seconds);
		if (seconds === 0) s = 0;
		sb.style.background = `conic-gradient(#fff 0 ${s}%, #ffffff00 ${s}% 100%)`;
	};

	const minutesFun = (total) => {
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const mb = document.querySelector('.timer-special__minutes');

		mb.querySelector('div ul li').innerHTML = (minutes < 10 ? '0' + minutes : minutes);
		let m = 100 - ((100 / 60) * minutes);
		if (minutes === 0) m = 0;
		mb.style.background = `conic-gradient(#fff 0 ${m}%, #ffffff00 ${m}% 100%)`;
	};

	const hoursFun = (total) => {
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const hb = document.querySelector('.timer-special__hours');

		hb.querySelector('div ul li').innerHTML = (hours < 10 ? '0' + hours : hours);
		let h = 100 - ((100 / 24) * hours);
		if (hours === 0) h = 0;
		hb.style.background = `conic-gradient(#fff 0 ${h}%, #ffffff00 ${h}% 100%)`;
	};

	const daysFun = (endtime) => {
		const currentDate = new Date();
		const targetDate = new Date(endtime);
		targetDate.setHours(0, 0, 0, 0);
		const days = Math.ceil((targetDate - currentDate) / (1000 * 60 * 60 * 24));
		const db = document.querySelector('.timer-special__days');

		db.querySelector('div ul li').innerHTML = (days < 10 ? '0' + days : days);
		let d = 100 / days;
		if (days === 0) d = 0;
		db.style.background = `conic-gradient(#fff 0% ${d}%, #ffffff00 ${d}% 100%)`;
	};

	const timeFun = (endtime) => {
		const intervalFun = () => {
			const total = Date.parse(endtime) - Date.parse(new Date());

			secondsFun(total);
			minutesFun(total);
			hoursFun(total);
			daysFun(endtime);

			if (total <= 0) clearInterval(stopTime);
		};

		intervalFun();
		stopTime = setInterval(intervalFun, 1000);
	};

	// Виклик функції timeFun з потрібним часом завершення (вересень 2023)
	timeFun("2023-09-30T00:00:00");
});
