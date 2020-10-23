import Taro from "@tarojs/taro";

/**
 * 成功提示消息
 */
export const success = (title: string, duration: number = 1500) => {
    info(title, duration, 'success')
}

/**
 * 失败提示消息
 * @param title 
 * @param duration 
 */
export const fail = (title: string, duration: number = 2500) => {
    info(title, duration, 'none')
}

/**
 * 信息提示
 * @param title 
 * @param duration 
 * @param icon 
 */
export const info = (title: string, duration: number = 2000, icon: 'success' | 'loading' | 'none' = 'none') => {
    Taro.showToast({
        title: title,
        icon: icon,
        duration: duration,
        mask: true
    })
    if (duration > 0) {
        return new Promise(resolve => setTimeout(resolve, duration))
    }
}

/**
 * 是否是 H5 环境
 * @type {boolean}
 */
export const isH5: boolean = Taro.ENV_TYPE.WEB === Taro.getEnv();

export default { success, fail, info }
