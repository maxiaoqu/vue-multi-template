<template>
    <div class="todoSigRequest">
        单独Api使用案例
    </div>
</template>

<script>
    import {getRequestFile, getRequestData} from "../../request";

    export default {
        name: "todoSigRequest",
        mounted() {
            this.todoSigRequestData()
            this.todoSigRequestFile()
        },
        methods: {
            todoSigRequestData() {
                let params = {
                    aaa: 'aaa',
                    bbb: 'bbb'
                }
                getRequestData('/zjServe/getRegion21.do', 'get', params).then(res => {
                    console.log('数据res--sig', res)
                }).catch(err => {
                    console.log('数据err--sig', err)
                })
            },
            todoSigRequestFile() {
                let params = {
                        aaa: 'aaa',
                        bbb: 'bbb'
                    },
                    filePath = '';
                getRequestFile('/zjServe/getRegion22.do', 'post', params, filePath).then(res => {
                    console.log('文件res--sig', res)
                }).catch(err => {
                    console.log('文件err--sig', err)
                })
            }
        }
    }
</script>

<style scoped>

</style>