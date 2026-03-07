<script setup>
import request from '../api/axiosEncap.js'

const encapGet = () =>{
    request(
        '/getUserList',
        {id:1001},
        'get',
        50000
    )
}

const encapPost = () =>{
    request(
        '/postOrderList',
        {Authorization:'yyyyyyyyyyyyyyy'},
        'post',
        50000
    )
}


</script>

<template>
    <button @click="encapGet">封装测试Get</button>
    <button @click="encapPost">封装测试Post</button>
</template>