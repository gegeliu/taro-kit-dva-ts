import Request from '../utils/request';

// 此文件包含通用接口
/**
 * ping 响应测试 
 * @param data {id: 标识}
 */
export const ping = (data: any) => Request({
    url: 'api/ping',
    method: 'GET',
    data,
});
