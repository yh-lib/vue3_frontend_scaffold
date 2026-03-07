// 封装 axios
/*
    1. 封装可以简化我的接口调用的代码，可以去掉一些重复的代码
    2. 换掉 Axios 也是比较简单的
*/

import axios from 'axios'

// axios 全局配置
axios.defaults.baseURL="https://a5ecb601-bf13-4d6f-9c04-d23ec2f6bc02.mock.pstmn.io"

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

const request = (url = '', data = {}, method = 'get', timeout = 5000) => {
    console.log("使用封装函数去处理请求")
    return new Promise(
        (resolve, reject) => {
            console.log("使用axios请求接口")
            // GET POST
            const methodLower = method.toLowerCase()
            if (methodLower == 'get'){
                axios({
                    method: methodLower,
                    params: data,
                    timeout: timeout,
                    url: url,
                }).then((response)=>{
                    // 能正常拿到数据
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
            } else if (methodLower === "post") {
                axios({
                    method: methodLower,
                    data: data,
                    timeout: timeout,
                    url: url,
                }).then((response)=>{
                    // 能正常拿到数据
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
            }
        }
    )
}

export default request