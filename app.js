const App = {
	data() {
		return {
			count: 1
		}
	},
	methods: {
		slideTo: (e) => {
			const elem = document.querySelector('.section[data-slide="' + e + '"]');
			elem.classList.remove('hidden');
			VueScrollTo.scrollTo(elem, 1000)
		},
		setCountry: (e) => {
			const btns = document.querySelectorAll('.section .btn-links .btn');
			console.log(btns)
			btns.forEach(btn => {
				if (btn.classList.contains('_active')) {
					btn.classList.remove('_active')
				}
			});
			e.classList.add('_active');
		}
	}
}

Vue.createApp(App).mount("#app");