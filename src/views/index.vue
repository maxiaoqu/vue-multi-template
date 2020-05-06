<template>
    <div class="index">
        indexPage
    </div>
</template>

<script>
    import {getRegion} from "../api/common/getdata";

    export default {
        name: "index",
        mounted() {
            let params = {
                aaa: 'aaa',
                bbb: 'bbb'
            }
            getRegion(params).then(res => {
                console.log('res',res)
            }).catch(err => {
                console.log('err',err)
            })
        }
    }
</script>

<style scoped>

</style>