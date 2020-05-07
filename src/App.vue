<template>
    <div id="app">
        <todoComRequest></todoComRequest>
        <todoSigRequest></todoSigRequest>
    </div>
</template>

<script>
    import todoComRequest from './views/request/todoComRequest';
    import todoSigRequest from './views/request/todoSigRequest';

    export default {
        name: 'app',
        components: {todoComRequest,todoSigRequest},
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
