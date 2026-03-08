import { API_CONFIG,CONFIG } from "../config/index.js"
import router from "../router/index.js"
import request from "./axiosEncap.js"
import { ElMessage } from 'element-plus'

export const login = (username,password) => {
    request(
        API_CONFIG.loginApi,
        {username,password},
        'post',
        3000
        ).then((response)=>{
            console.log('response:',response)
            if (response.data.status === 200) {
                // 将后端返回的token保存到本地
                const token = response.data.data.token
                window.localStorage.setItem(CONFIG.TOKEN_NAME,token)
                // 提示登录成功
                ElMessage({
                    message: response.data.msg,
                    type: 'success',
                })
                router.replace(API_CONFIG.homeApi)            
            } else {
                ElMessage.error('登录失败')
            }
        })
        .catch((response)=>{
            console.log('response2:',response)
        })
}


