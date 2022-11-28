const App = {
	data() {
		return {
			count: 1,
			selectedTour: null,
			selectedCount: null,
			tourPack: [
				{
					id: 1,
					title: "1111 Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: "от $2 800",
					imageUrl: "./assets/img/bg/3.jpg"
				},
				{
					id: 2,
					title: "2222 Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: "от $2 800",
					imageUrl: "./assets/img/bg/4.jpg"
				},
				{
					id: 3,
					title: "3333 Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: "от $2 800",
					imageUrl: "./assets/img/bg/5.jpg"
				},
				{
					id: 4,
					title: "4444 Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: "от $2 800",
					imageUrl: "./assets/img/bg/6.jpg"
				}
			],
			touristsCount: [
				{
					id: 1,
					imageUrl: './assets/img/bg/4.jpg',
					title: "Семейный тур (с детьми)"
				},
				{
					id: 2,
					imageUrl: './assets/img/bg/5.jpg',
					title: "Для двоих"
				},
				{
					id: 3,
					imageUrl: './assets/img/bg/6.jpg',
					title: "Отдыхаю один/одна"
				},
				{
					id: 4,
					imageUrl: './assets/img/bg/7.jpg',
					title: "Отдых с друзьями"
				},
				{
					id: 5,
					imageUrl: './assets/img/bg/1.jpg',
					title: "Другой вариант"
				}
			]
		}
	},
	methods: {
		slideTo: (e) => {
			const elem = document.querySelector('.section[data-slide="' + e + '"]');
			elem.classList.remove('hidden');
			VueScrollTo.scrollTo(elem, 1000)
		},
		setCountry(item) {
			this.selectedTour = item;
		},
		setCount(item) {
			this.selectedCount = item;
		}
	}
}

Vue.createApp(App).mount("#app");