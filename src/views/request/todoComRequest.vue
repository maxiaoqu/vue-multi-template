<template>
    <div class="todoComRequest">
        接口提取公共Api使用案例
    </div>
</template>

<script>
    import {getRegion, getOwnerToHyCode} from "../../api/common/getdata";

    export default {
        name: "todoComRequest",
        mounted() {
            this.todoCcomRequestData()
            this.todoComRequestFile()
        },
        methods: {
            todoCcomRequestData() {
                let params = {
                    aaa: 'aaa',
                    bbb: 'bbb'
                }
                getRegion(params).then(res => {
                    console.log('数据res--com', res)
                }).catch(err => {
                    console.log('数据err--com', err)
                })
            },
            todoComRequestFile() {
                let params = {
                        aaa: 'aaa',
                        bbb: 'bbb'
                    },
                    filePath = '';
                getOwnerToHyCode(params, filePath).then(res => {
                    console.log('文件res--com', res)
                }).catch(err => {
                    console.log('文件err--com', err)
                })
            }
        }
    }
</script>

<style scoped>

</style>