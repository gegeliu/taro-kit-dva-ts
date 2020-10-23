import Request from '../../utils/request';

/**
 * 测试接口 
 * @param data {}
 */
export const test = (data: any) => Request({
    url: 'api/test',
    method: 'GET',
    data,
});

