import Taro from '@tarojs/taro';
import Utils, { isH5 } from './index'

export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://xxx.com/' : (isH5 ? '/' : 'http://localhost:9527/');
//
// 输出日志信息 最新修改为在taro配置uglify或terser控制 console
//
export const noConsole = false;

interface OptionsType {
  method: 'GET' | 'POST' | 'PUT';
  url: string;
  data: any;
  loading?: boolean;
}
const request_data = {
  platform: Taro.getEnv(),
};
export default (options: OptionsType = { url: '', method: 'GET', data: {}, loading: false }) => {
  if (options.loading) {
    Taro.showLoading({
      title: '加载中'
    });
  }
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 URL=${options.url} 】PARAM=${JSON.stringify(options.data)}`);
  }
  for (const key in options.data) {
    if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
      delete options.data[key];
    }
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data
    },
    header: {
      'authorization': Taro.getStorageSync('token'),
      'content-type': 'application/json'
    },
    method: options.method
  }).then((res) => {
    if (options.loading) {
      setTimeout(() => {
        Taro.hideLoading();
      }, 100);
    }
    if (!noConsole) {
      console.log(`${new Date().toLocaleString('zh', { hour12: false })}【${options.url} 】【返回】`, res.data);
    }
    let data = res.data
    //console.log("code typeof " + typeof (data.code))
    if (typeof (data.code) !== 'number') {
      console.log("!!!remake data code " + res.statusCode)
      data.code = res.statusCode
    }
    else {
      console.log("code is ok!! " + data.code)
    }
    if (200 !== res.statusCode) {
      let tip = data.msg ? data.msg : ''
      tip += ", 错误码 " + data.code
      Utils.fail("网络请求失败," + tip, 3000)
      console.log("error " + tip)
    }
    return data
  }).catch(err => {
    console.log('request err', err)
    Utils.fail("网络请求错误 " + err.errMsg)
    return { code: 408, status: 408, msg: '网络请求失败 ' + err.errMsg }  // 408 超时
  });
};
