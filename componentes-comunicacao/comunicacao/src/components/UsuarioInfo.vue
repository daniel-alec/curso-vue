<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    // props: ['nome'],
    props: {
        // nome: String
        nome: {
            type: String,
            // required: true
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            // const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo
            // })
        }
    },
    created() {
        // barramento.$on('idadeMudou', (idade) => {
        barramento.quandoIdadeMudar( (idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
