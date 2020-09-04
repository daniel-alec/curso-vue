new Vue({
    el: '#desafio',
    data: {
        nome: 'Maria',
        idade: 29,
        url_image: 'https://i.pinimg.com/280x280_RS/35/c3/99/35c39967709bf375b52eba98f8d9f035.jpg'
    },
    methods: {
        idadeVezes(x) {
            return this.idade*x
        },
        random() {
            return Math.random()
        }
    }
})