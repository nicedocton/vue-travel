const App = {
	data() {
		return {
			count: 1
		}
	},
	mounted() {
		testFunc
	},
	methods: {
		testFunc: (e) => {
			console.log(e);
		}
	}
}

Vue.createApp(App).mount("#app");