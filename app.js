const App = {
	data() {
		return {
			count: 1,
			selectedTour: null,
			selectedCount: null,
			selectedHotel: null,
			selectedHotelType: null,
			selectedDays: null,
			totalPrice: 0,
			tourPack: [
				{
					id: 1,
					title: "Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: 1000,
					imageUrl: "./assets/img/bg/3.jpg"
				},
				{
					id: 2,
					title: "Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: 2000,
					imageUrl: "./assets/img/bg/4.jpg"
				},
				{
					id: 3,
					title: "Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: 3000,
					imageUrl: "./assets/img/bg/5.jpg"
				},
				{
					id: 4,
					title: "Путешествие сквозь время в Эр-Рияд & Аль-Ула. Эр-Рияд & Аль-Ула 5 ночей",
					price: 4000,
					imageUrl: "./assets/img/bg/6.jpg"
				}
			],
			touristsCount: [
				{
					id: 1,
					imageUrl: './assets/img/bg/4.jpg',
					title: "Семейный тур (с детьми)",
					price: 2
				},
				{
					id: 2,
					imageUrl: './assets/img/bg/5.jpg',
					title: "Для двоих",
					price: 2
				},
				{
					id: 3,
					imageUrl: './assets/img/bg/6.jpg',
					title: "Отдыхаю один/одна",
					price: 1
				},
				{
					id: 4,
					imageUrl: './assets/img/bg/7.jpg',
					title: "Отдых с друзьями",
					price: 3
				},
				{
					id: 5,
					imageUrl: './assets/img/bg/1.jpg',
					title: "Другой вариант",
					price: 1.5
				}
			],
			hotelList: [
				{
					id: 1,
					imageUrl: "./assets/img/bg/4.jpg",
					title: "Пляжный отдых, спокойный отдых",
					price: 2000
				},
				{
					id: 2,
					imageUrl: "./assets/img/bg/5.jpg",
					title: "Пляжный отдых + активные развлечения",
					price: 1500
				},
				{
					id: 3,
					imageUrl: "./assets/img/bg/6.jpg",
					title: "Городской отдых + экскурс",
					price: 1300
				},
				{
					id: 4,
					imageUrl: "./assets/img/bg/7.jpg",
					title: "Другие пожелания",
					price: 1000
				},
			],
			hotelType: [
				{
					id: 1,
					imageUrl: "./assets/img/bg/5.jpg",
					title: 5,
					rate: 5,
					price: 500
				},
				{
					id: 2,
					imageUrl: "./assets/img/bg/6.jpg",
					title: 4,
					rate: 4,
					price: 800
				},
				{
					id: 3,
					imageUrl: "./assets/img/bg/7.jpg",
					title: 3,
					rate: 3,
					price: 1000
				},
				{
					id: 4,
					imageUrl: "./assets/img/bg/1.jpg",
					title: "Любой",
					rate: null,
					price: 1500
				},
				{
					id: 5,
					imageUrl: "./assets/img/bg/2.jpg",
					title: "Другой вариант",
					rate: null,
					price: 2000
				}
			],
			numberOfDays: [
				{
					id: 1,
					imageUrl: "./assets/img/bg/7.jpg",
					title: "5 дней",
					price: 5
				},
				{
					id: 2,
					imageUrl: "./assets/img/bg/1.jpg",
					title: "от 5 до 7 дней",
					price: 7
				},
				{
					id: 3,
					imageUrl: "./assets/img/bg/2.jpg",
					title: "от 7 до 10 дней",
					price: 10
				},
				{
					id: 4,
					imageUrl: "./assets/img/bg/3.jpg",
					title: "от 10 до 15 дней",
					price: 15
				},
				{
					id: 5,
					imageUrl: "./assets/img/bg/4.jpg",
					title: "Другое",
					price: 20
				},
			]
		}
	},
	computed: {
		totalPrice () {
			this.totalPrice = ((this.selectedTour * this.touristsCount) + (this.selectedHotel + this.selectedHotelType)) * this.selectedDays
		}
	},
	methods: {
		slideTo: (e) => {
			const elem = document.querySelector('.section[data-slide="' + e + '"]');
			VueScrollTo.scrollTo(elem, 1000)
		},
		setCountry(item) {
			this.selectedTour = item;
			console.log(this.selectedTour)
		},
		setCount(item) {
			this.selectedCount = item;
			console.log(this.selectedCount)
		},
		setHotel(item) {
			this.selectedHotel = item;
			console.log(this.selectedHotel)
		},
		setHotelType(item) {
			this.selectedHotelType = item;
			console.log(this.selectedHotelType)
		},
		setDays(item) {
			this.selectedDays = item;
			console.log(this.selectedDays)
		}
	}
}

Vue.createApp(App).mount("#app");