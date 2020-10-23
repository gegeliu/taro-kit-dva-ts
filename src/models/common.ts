import Taro from '@tarojs/taro';
import * as commonApi from '../services';

export default {
    namespace: 'common',
    state: {
        flag: 0,
        token: Taro.getStorageSync('token'),
        user_info: Taro.getStorageSync('user_info')
    },

    effects: {
        *ping(_: any, { call, put, select }) { // 获取单项信息
            const { flag } = yield select((state: any) => state.common)
            const params = _.payload
            console.log("common ping incoming " + flag)
            const res = yield call(commonApi.ping, params);
            if (0 == res.code) {
                yield put({ type: 'save', payload: { flag: 1 } });
            }
            else {
                console.log("ping failed ", res)
                yield put({ type: 'save', payload: { flag: -1 } });
            }
        }
    },

    reducers: {
        save(state: any, { payload }) {
            return { ...state, ...payload };
        },
    },

};
