<script setup>
import axios from 'axios';
import { reactive,toRefs } from 'vue';

// axios 全局配置
axios.defaults.baseURL="https://a5ecb601-bf13-4d6f-9c04-d23ec2f6bc02.mock.pstmn.io"
axios.defaults.timeout="3000"

// axios 拦截器
// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 添加请求时的 token，处理认证逻辑
        config.headers.Authorization = 'yyyyyyyyyyyyyyyyy'
        // 添加请求时的时间戳，处理浏览器缓存问题
        if (config.method == 'get') {
            let timeStamp = (new Date()).getTime()
            config.params?config.params.timeStamp=timeStamp:config.params={timeStamp:timeStamp}
        } 
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        if (response.data.status == 200){
            return response;
        }else if (response.data.status == 401) {
            alert("Token 已失效")
        }        
    }, 
    (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);


let data = reactive({
    userList: []
})

const getUserList = () =>{
    console.log("调用后端接口")
    // 获取用户列表
    axios.get('/getUserList')
    .then( (response) => {
        // 处理成功情况
        console.log(response.data);
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert('看这里')
    // })
    .finally(()  => {
        // 总是会执行
    });    
}

const getUserListWithParms = () =>{
    console.log("调用后端接口")
    // 获取符合条件的用户
    axios.get('/getUserList',{
        params: {
            // 查询条件
            limit:10,
            age:18,
        }
    })
    .then( (response) => {
        // 处理成功情况
        console.log(response.data);
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert(error)
    // })
    .finally(()  => {
        // 总是会执行
    });    
}

const getUserListWithBind = () =>{
    console.log("调用后端接口")
    // 获取符合条件的用户
    axios.get('/getUserList')
    .then( (response) => {
        // 处理成功情况
        data.userList = response.data.data
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert(error)
    // })
    .finally(()  => {
        // 总是会执行
    });    
}

// 使用请求接口创建接口请求: 注意 axios 后面的 .get 没有了
const getOrderList = () =>{
    axios({
        url: '/getOrderList',
        method: 'get',
        params: {
            // 查询条件
            limit:10,
            price:18,
        }
    })
    .then( (response) => {
        // 处理成功情况
        console.log(response.data)
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert(error)
    // })
    .finally(()  => {
        // 总是会执行
    });    
}

// 使用请求接口创建接口请求: 注意 axios 后面的 .get 没有了
const postOrderList = () =>{
    axios({
        url: '/postOrderList',
        method: 'post',
        data: [
            {
                name: "韭菜鸡蛋",
                price: 15
            },
            {
                name: "米饭",
                price: 2,
            }
        ]
    })
    .then( (response) => {
        // 处理成功情况
        alert(response.data.status)
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert(error)
    // })
    .finally(()  => {
        // 总是会执行
    });    
}

// 超时请求
const timeoutTest = () =>{
    axios({
        url: '/timeoutTest',
        method: 'get',
        timeout: '2000',
    })
    .then( (response) => {
        // 处理成功情况
        alert(response.data.status)
    })
    // .catch((error) => {
    //     // 处理错误情况
    //     alert(error)
    // })
    .finally(()  => {
        // 总是会执行
    });    
}
</script>

<template>
    <div>
        <h3>Axioss</h3>
        <button @click="getUserList()">获取用户列表</button>
        <button @click="getUserListWithParms()">获取符合条件的用户</button>
        <button @click="getUserListWithBind()">数据双向绑定</button>
        <button @click="getOrderList()">获取菜单</button>
        <button @click="postOrderList()">提交菜单</button>
        <button @click="timeoutTest()">超时测试</button>
        <ul v-for="(value,index) in data.userList">
            username: {{value.username}}    age: {{ value.age }}
        </ul>
    </div>
</template>