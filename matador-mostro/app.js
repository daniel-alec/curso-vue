new Vue({
	el: '#main',
	data: {
		iniciado: false,
		load_jogador: 100,
		load_mostro: 100
	},
	methods: {
		desistir() {
			this.iniciado = false,
			this.load_jogador = 100,
			this.load_mostro = 100
		}
	},
    computed: {
        progress_jogador() {
			return {
				progressFull: (this.load_jogador == 100 ? true : false)
			}
		},
		progress_mostro() {
			return {
				progressFull: (this.load_mostro == 100 ? true : false)
			}
		}
    }
});
