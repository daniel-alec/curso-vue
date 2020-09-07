new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor != 37 ? 'Valor diferentão' : 'Valor igual'
        }
    },
    watch: {
        valor(antes, depois) {
            console.log(antes, depois)
            setTimeout(() => {
                this.valor = 0
            },5000)
        }
    }
});