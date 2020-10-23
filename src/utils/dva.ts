import Taro from '@tarojs/taro';
import { create } from 'dva-core';
// import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;
let registered;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  opt.onError = (err) => {
    console.error(err);
    Taro.hideLoading();
    Taro.showToast({ title: '服务器错误', icon: 'none' });
  };
  app = create(opt);
  app.use(createLoading({}));

  // 适配支付宝小程序
  // if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
  //   global = {};
  // }
  if (!registered) opt.models.forEach((model) => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.log("app onerror", err);
    }
  });

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
