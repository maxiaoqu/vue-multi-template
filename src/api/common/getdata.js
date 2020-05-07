import {comRequestData, comRequestFile} from "@/request";

// 回去数据
export const getRegion = (param) => {
    let params = param ? param : {};
    const config = {
        url: '/zjServe/getRegion11.do',
        data: params,
        method: 'get'
    };
    return comRequestData(config);
};

// 文件上传
export const getOwnerToHyCode = (param,filePath) => {
    let params = param ? param : {};
    const config = {
        url: '/zjServe/getRegion12.do',
        data: params,
        method: 'get'
    };
    return comRequestFile(config,filePath);
};
