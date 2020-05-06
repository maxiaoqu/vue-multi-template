import {comRequestData} from "@/request";

// 获取地市编码（正常的6位数编码）
export const getRegion = (param) => {
    let params = param ? param : {};
    const config = {
        url: '/zjServe/getRegion.do',
        data: params,
        method: 'get'
    };
    return comRequestData(config);
};

// 获取地市编码（转换成5位数）
export const getOwnerToHyCode = (param) => {
    let params = param ? param : {};
    const config = {
        url: '/zjzjServe/getOwnerToHyCode.do',
        data: params,
        method: 'get'
    };
    return comRequestData(config);
};
