new Vue({
    el: '#desafio',
    data: {
        nome: 'Daniel',
        idade: 42,
        url_image: 'https://i.pinimg.com/280x280_RS/35/c3/99/35c39967709bf375b52eba98f8d9f035.jpg'
    },
    methods: {
        random() {
            return Math.random()
        }
    }
})