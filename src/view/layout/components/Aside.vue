<script setup>
</script>

<template>
<el-aside class='aside-log'>
    <router-link to="/home">
        <el-button text>
            Kubernetes 管理平台
        </el-button>
    </router-link>
</el-aside>
</template> 

<style lang="less" scoped>
.aside-log{
    border-right: 1px solid #cccccc;
    button{
        width: 100%;
        font-size: 25px;
    }
}
</style>
