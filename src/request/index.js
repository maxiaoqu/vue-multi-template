/**
 * @author maxiaoqu(码小趣：maxiaoqu@163.com)
 * @since 2019-08-21
 * @description 该请求框架集成了【axios、fecth】的请求方法、调取本地文件、文件回显等方法
 *【注意】
 * 1、i国网、uap有仅支持get、post
 */

import {nodeEnv} from "@/environment/nodeEnv";
import {dataRequest, fileRequest} from "./axios";

const requestMethod = nodeEnv.requestMethod;
const zuul = '';

/**
 * @description: 普通请求方法汇总【i国网、uap、安卓、前端(axios)】等4中普通请求方法汇总
 * @param: {String}[action]接口地址
 * @param: {Object}[config]接口所需要的参数{{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Function}[resolve]Promise成功回调
 * @param: {Function}[reject]Promise失败回调
 * @param: {Array||String}[filePath]标记是否是文件传输、同时包含文件的路径
 * @returns: {String}接口返回的参数
 */
const chooseRequest = (action, config, resolve, reject, filePath) => {
    // 先判断是否是文件上传
    if (filePath && requestMethod == 'axios') {
        console.info('axios文件操作');
        return dataRequest(action, config, resolve, reject);
    } else if (filePath && requestMethod == 'fetch') {
        console.info('fetch文件操作');
        return dataRequest(action, config, resolve, reject);
    }
    // 再判断是否是数据获取、数据上传
    else if (requestMethod == 'fetch') {
        console.info('fetch数据操作');
        return fileRequest(action, config, resolve, reject);
    } else {
        console.info('axios数据操作');
        return fileRequest(action, config, resolve, reject);
    }
};

/**
 * @description: 【Request一】数据操作
 * @param: {String}[action]接口地址
 * @param: {String}[method]:请求方法（get、post、delete、put、path等）
 * @param: {Object}[params]：接口参数
 * @returns: {String}接口返回的参数
 */
export const getRequestData = (action, method, params) => {
    let config = {
        method: method,
        data: params
    };
    action = zuul + action;
    return new Promise((resolve, reject) => {
        return chooseRequest(action, config, resolve, reject);
    });
};

/**
 * @description:【Request二】文件操作:（照片、音频、视频）
 * @param: {String}[action]接口地址
 * @param: {String}[method]:请求方法（get、post、delete、put、path等）
 * @param: {Object}[params]：接口参数
 * @param: {Array||String}[filePath]文件的路径
 * @returns: {String}接口返回的参数
 */
export const getRequestFile = (action, method, params, filePath) => {
    let config = {
        method: method,
        data: params
    };
    action = zuul + action;
    return new Promise((resolve, reject) => {
        return chooseRequest(action, config, resolve, reject, filePath);
    });
};

/**
 * @description:【Request四】文件操作:（照片、音频、视频）【接口提取公共Api用到】
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @returns: {String}接口返回的参数
 */
export const comRequestData = (config) => {
    let action = zuul + config.url;
    return new Promise((resolve, reject) => {
        return chooseRequest(action, config, resolve, reject);
    });
};

/**
 * @description:【Request四】文件操作:（照片、音频、视频）【接口提取公共Api用到】
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Array||String}[filePath]文件的路径
 * @returns: {String}接口返回的参数
 */
export const comRequestFile = (config, filePath) => {
    let action = zuul + config.url;
    filePath = "asdasdas";
    return new Promise((resolve, reject) => {
        return chooseRequest(action, config, resolve, reject, filePath);
    });
};