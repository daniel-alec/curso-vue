new Vue({
	el: '#desafio',
	data: {
		// meu
		aplicarEfeito: false,
		classeUser: '',
		classeUser2: '',
		mostrar: '',
		estilosUser: '', // background-color: red; width: 50px; height: 50px;
		cor: 'deepskyblue',
    	largura: 0,
		altura: 10,
		
		// professor
		classe1: 'destaque',
		perigo: true,
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			// 'destaque' | 'encolher'
			setInterval(() => { 
				// 1) meu
				// this.aplicarEfeito = !this.aplicarEfeito
				// 1) professor
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			// 5) meu
			// const myVar = setInterval(() => { 
			// 	this.largura += 10
			// 	if (this.largura == 100) {
			// 		clearInterval(myVar);
			// 	}
			// }, 1000);

			// 5) professor
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor == 100) clearInterval(temporizador)
			}, 500);
		},
		// 4) professor
		setPerigo(event) {
			if (event.target.value == "true") {
				this.perigo = true
			}
			else if (event.target.value == "false") {
				this.perigo = false
			}
		},
	},
	computed: {
		estilo1() {
			return {
				destaque: this.aplicarEfeito,
				encolher: !this.aplicarEfeito
			}
		},
		// 4) meu
		mostrarEstiloUser() {
			return {
				esconder: !(this.mostrar == 'true' ? true : false)
			}
		},		
		// 5) meu
		progresso() {
			return {
				largura: this.largura + 'px',
				altura: this.altura,
				cor: this.cor
			}
		}		
	}
})
