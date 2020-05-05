import {nodeEnv} from './nodeEnv';

// 判断是否是开发环境：是：true/不是：false
export const isProduction = nodeEnv.nodeEnv === 'production' ? true:false;

