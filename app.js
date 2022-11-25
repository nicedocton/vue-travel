const App = {
	data() {
		return {
			count: 1
		}
	},
	mounted() {
		slideTo
	},
	methods: {
		slideTo: (e) => {
			const elem = document.querySelector('[data-slide="' + e + '"]');
			elem.classList.remove('hidden');
			elem.scrollIntoView({behavior: "smooth"});
		}
	}
}

Vue.createApp(App).mount("#app");