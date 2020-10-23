//import Taro from '@tarojs/taro';
import * as api from './service';

export default {
    namespace: 'index',
    state: {
        iflag: 0
    },
    effects: {
        *test(_: any, { call, put, select }) { // 测试信息
            const { iflag } = yield select((state: any) => state.index)
            const params = _.payload
            console.log("test incoming " + iflag)
            const res = yield call(api.test, params);
            if (0 == res.code) {
                yield put({ type: 'save', payload: { iflag: 1 } });
            }
            else {
                console.log("test failed ", res)
                yield put({ type: 'save', payload: { iflag: -1 } });
            }
        }
    },

    reducers: {
        save(state: any, { payload }) {
            return { ...state, ...payload };
        },
    },

};