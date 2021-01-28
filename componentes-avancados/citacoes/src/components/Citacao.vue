<template>
    <div class="citacao">
        <!-- {{ texto }} -->
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
    // props: ['texto']
    created() {
        // eslint-disable-next-line
        console.log('created')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('destroyed')
    },
    activated() {
        // eslint-disable-next-line
        console.log('activated')
    },
    deactivated() {
        // eslint-disable-next-line
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
