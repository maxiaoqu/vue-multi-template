/**
 * @author maxiaoqu(码小趣：maxiaoqu@163.com)
 * @since 2019-08-26
 * @description 添加请求拦截、响应拦截
 */
import Axios from 'axios';
import {dealWithError} from '../dealWithError';
import {isProduction} from "@/environment/process";
import baseURL from "@/environment/url";

const intercept = Axios;

/**
 * @description: 添加请求拦截器
 * @param: {Object}[config]发起请求时的一系列参数
 * @returns: {Object}接口请求拦截器添加之后返回的参数
 */
sptors.request.use((config) => {
    config.headers['author'] = "maxiaoqu.com";
    // 判断是否是登录页，是的话不需要
    if (!config.url.includes('/login')) {
        config.headers['Authorization'] = '登录用户token';
    }
    // 判断是否是json文件，是的话baseURL为空
    if (config.url.includes('.json') || config.url.includes('.g')) {
        config.baseURL = '';
    } else if (isProduction) {
        config.baseURL = baseURL.dip;
    }
    // 如果在vue.config.js中配置了proxy的话，就不需要else，注释即可åå
    else {
        config.baseURL = baseURL.dip;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

/**
 * @description: 添加响应拦截器
 * @param: {Object}[config]请求相应时的一系列参数
 * @returns: {Object}接口相应拦截器拦截处理数据之后返回的参数
 */
intercept.interceptors.response.use(res => {
    let {data} = res;
    if (res.status !== 200) return false;
    if (data.data === '') return {
        success: false, data: "暂无数据"
    };
    return data;
}, (error) => {
    let errorMessage = dealWithError(error);
    return Promise.reject(errorMessage)
});

export default intercept
