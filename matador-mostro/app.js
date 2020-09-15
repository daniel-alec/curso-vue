new Vue({
	el: '#main',
	data: {
		iniciado: false,
		load_jogador: 100,		
		load_mostro: 100,
		width_jogador: '100%',
		width_mostro: '100%',
		mostrar_mensagem: false,
		resultado: ''
	},
	methods: {
		iniciar() {
			this.iniciado = true,
			this.load_jogador = 100,
			this.load_mostro = 100,
			this.width_jogador = '100%',
			this.width_mostro = '100%',
			this.resultado = '',
			this.mostrar_mensagem = false
		},
		desistir() {
			this.iniciado = false,
			this.load_jogador = 100,
			this.load_mostro = 100,
			this.width_jogador = '100%',
			this.width_mostro = '100%',
			this.resultado = '',
			this.mostrar_mensagem = false
		},
		atacar() {
			let golpe_monstro = randomIntFromInterval(9,15)
			let golpe_jogador = randomIntFromInterval(5,9)

			this.load_jogador -= golpe_monstro			
			this.load_mostro -= golpe_jogador

			if (this.load_jogador < 0) this.load_jogador = 0
			if (this.load_mostro < 0) this.load_mostro = 0

			this.width_jogador = `${this.load_jogador}%`
			this.width_mostro = `${this.load_mostro}%`

			this.verificar_resultado()
		},
		atacar_especial() {
			let golpe_monstro = randomIntFromInterval(5,9)
			let golpe_jogador = randomIntFromInterval(9,15)

			this.load_jogador -= golpe_monstro			
			this.load_mostro -= golpe_jogador

			if (this.load_jogador < 0) this.load_jogador = 0
			if (this.load_mostro < 0) this.load_mostro = 0

			this.width_jogador = `${this.load_jogador}%`
			this.width_mostro = `${this.load_mostro}%`

			this.verificar_resultado()
		},
		curar() {
			let golpe_monstro = randomIntFromInterval(5,9)
			let cura_jogador = randomIntFromInterval(9,15)
			
			this.load_jogador += cura_jogador - golpe_monstro

			if (this.load_jogador < 0) this.load_jogador = 0
			if (this.load_jogador > 100) this.load_jogador = 100

			this.width_jogador = `${this.load_jogador}%`

			this.verificar_resultado()
		},
		verificar_resultado() {			
			if (this.load_jogador == 0 && this.load_mostro > 0) {
				this.iniciado = false
				this.mostrar_mensagem = true,
				this.resultado = 'Monstro ganhou!'
			}
			else if (this.load_jogador > 0 && this.load_mostro == 0) {
				this.iniciado = false
				this.mostrar_mensagem = true,
				this.resultado = 'Você ganhou!'
			}
			else if (this.load_jogador > 0 && this.load_mostro == 0) {
				this.iniciado = false
				this.mostrar_mensagem = true,
				this.resultado = 'Empataram!'
			}
		}
	},
    computed: {
        progress_jogador() {
			return {			
				progressOk: (this.load_jogador > 20 ? true : false)
			}
		},
		progress_mostro() {
			return {
				progressOk: (this.load_mostro > 20 ? true : false)
			}
		}		
    }
});

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}
