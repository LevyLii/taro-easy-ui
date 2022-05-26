import * as Taro from "@tarojs/taro";

export const eConsole = (msg: string | {}): void => {
    console.log('---taro-easy-ui---:', msg)
}

export const fitUnit = (num: number) => {
    switch (Taro.getEnv()) {
        case Taro.ENV_TYPE.WEB:
            return num * 100 / 750 + 'vw';
        case Taro.ENV_TYPE.RN:
            return num
        default:
            return num + 'rpx'
    }
}