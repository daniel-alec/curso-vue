new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta!")
        },
        guardaValor(event) {
            this.valor = event.target.value
        }
    }
})