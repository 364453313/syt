// axios二次封装
// 目的1：利用axios请求、响应拦截器功能
// 目的2：请求拦截器一般可以在请求头中携带公共的参数：token
// 目的3：响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 配置请求的基础路径、超时的时间设置
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // config:请求拦截器回调注入的对象（配置对象），配置对象的身上最终要的一件事情headers属性
    // 可以通过请求头携带公共参数
    return config
})

// 响应拦截器
request.interceptors.response.use((response) => {
    // 响应拦截器成功的回调，一般会进行数据简化
    return response.data
}, (error) => {
    console.log(error.message)
    // 处理http网络错误
    let status = error.response.status
    switch (status) {
        case 404:
            ElMessage({
                type: 'error',
                message: '请求失败，路径出现问题'
            })
            break
        case 500 | 501 | 502 | 503 | 504 | 505:
            ElMessage({
                type: 'error',
                message: '请求失败，服务器出现问题'
            })
            break
        case 401:
            ElMessage({
                type: 'error',
                message: '请求失败，无访问权限'
            })
            break
    }
    return Promise.reject(new Error(error.message))
})

export default request