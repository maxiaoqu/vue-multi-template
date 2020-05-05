<template>
    <div id="app">
        <index></index>
    </div>
</template>

<script>
    import index from './views/index'

    export default {
        name: 'app',
        components: {index},
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
