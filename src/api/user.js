import { API_CONFIG } from "../config/index.js"
import request from "./axiosEncap.js"

export const getUserListHandler = () => {
    return request(API_CONFIG.userListApi, {}, 'get', 10000)
}