const App = {
	data() {
		return {
			count: 1,
			loaded: true,
			booking: false,
			payment: false,
			lastScroll: 0,
			sectionHeight: 100,
			isActive: false,
			langList: 0,
			selectedCountry: 0,
			selectedTour: 0,
			selectedCount: 0,
			selectedHotel: 0,
			selectedHotelType: 0,
			selectedDays: 0,
			selectedPayment: 0,
			countries: 0,
			tourPack: 0,
			touristsCount: 0,
			hotelList: 0,
			hotelType: 0,
			numberOfDays: 0,
			paymentTypes: 0
		}
	},
	computed: {
		totalPrice: function() {
			return ((this.selectedTour.price + (this.selectedHotel.price + this.selectedHotelType.price)) + this.selectedDays.price)
		}
	},
	methods: {
		setCountry(item) {
			this.selectedCountry = item;
		},
		setTour(item) {
			this.selectedTour = item;
		},
		setCount(item) {
			this.selectedCount = item;
		},
		setHotel(item) {
			this.selectedHotel = item;
		},
		setHotelType(item) {
			this.selectedHotelType = item;
		},
		setDays(item) {
			this.selectedDays = item;
		},
		setPayment(item) {
			this.selectedPayment = item;
		},
		slideTo: (e) => {
			const elem = document.querySelector('.section[data-slide="' + e + '"]');
			VueScrollTo.scrollTo(elem,1000)
		},
		clickOutSide(e) {
			if (!this.langList.value.contains(e.target)) {
				this.isActive.value = false
			}
		},
		checkScrolling() {
			if (typeof window !== 'undefined') {
				this.sectionHeight = document.getElementById('slide1')?.getBoundingClientRect().height - 100
			}
			this.lastScroll = window.scrollY
		}
	},
	mounted() {
		window.addEventListener('scroll', this.checkScrolling)
		this.loaded = false;
		fetch('./data/db.json')
			.then(
				res => res.json(),
			)
			.then((data) => {
				this.countries = data.countries
				this.tourPack = data.tourPack
				this.touristsCount = data.touristsCount
				this.hotelList = data.hotelList
				this.hotelType = data.hotelType
				this.numberOfDays = data.numberOfDays
				this.paymentTypes = data.paymentTypes
				
			})
			.catch(error => console.log('Ошибка! Нет доступа к Api. ' + error));
	},
	onBeforeUnmount() {
		window.removeEventListener('scroll', checkScrolling)
	}
}

Vue.createApp(App).mount("#app");