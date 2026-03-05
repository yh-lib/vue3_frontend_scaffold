// 封装 axios
/*
    1. 封装可以简化我的接口调用的代码，可以去掉一些重复的代码
    2. 换掉 Axios 也是比较简单的
*/

import axios from 'axios'
const request = (url = '', data = {}, method = 'get', timeout = 5000) => {
    console.log("使用封装函数去处理请求")
    return new Promise((resolve, reject) => {
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
                params: data,
                timeout: timeout,
                url: url,
            }).then((response)=>{
                // 能正常拿到数据
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        }
    })
}

export default request