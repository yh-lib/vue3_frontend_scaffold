import { API_CONFIG } from "../config/index.js"
import request from "./axiosEncap.js"

// 获取用户列表
export const getUserListHandler = () => {
    return request(API_CONFIG.userListApi, {}, 'get', 10000)
}

// 删除用户
export const deleteUserHandler = (id) => {
    return request(API_CONFIG.userDeleteApi, {id}, 'post', 10000)
}