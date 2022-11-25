const App = {
	data() {
		return {
			count: 1
		}
	},
	mounted() {
		console.log(this.count)
		this.count = 2;
		function slideTo(e) {
			
		}
	}
}

Vue.createApp(App).mount("#app");