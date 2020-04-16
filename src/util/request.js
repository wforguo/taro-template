/**
 * @Description: request.js
 * @author: admin
 * @date: 2020/4/15
*/

import Taro from '@tarojs/taro'

const CODE_MSG = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '请求错误。',
    401: '用户没有权限（用户名或密码错误）。',
    403: '拒绝访问。',
    404: '请求地址出错。',
    406: '请求的格式不可得。',
    408: '请求超时。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器内部错误。',
    502: '网关错误。',
    503: '服务不可用。',
    504: '网关超时。',
    505: 'HTTP版本不受支持。',
};

const request = {
    handlerResolve: function(res, resolve, reject) {
        // 请求成功的处理
        console.log(res);
        if (res.statusCode === 200) {
            if (res.data.errcode === 0) {
                resolve(res);
            } else {
                reject(res.data);
            }
        } else {
            const errMsg = CODE_MSG[res.statusCode] || res.errMsg
            Taro.showToast({
                duration: 3000,
                icon: 'none',
                title: errMsg
            })
        }
    },
    handlerReject: function (err, reject, ifHandleError = true) {
        // 错误处理，微信小程序只有网络错误会进入到小程序
        reject(err);
        if (ifHandleError) {
            setTimeout(function() {
                Taro.showModal({
                    title: '提示',
                    content: '您的网络似乎不太好，请稍后再试!',
                    showCancel: false
                });
            },300);
        }
    },
    handleComplete: () => {
        // 请求完成，关闭所有loading
        Taro.hideNavigationBarLoading();
        Taro.hideLoading();
    },
    request: function (params) {
        return new Promise((resolve, reject) => {
            Taro.request({
                url: params.url,
                method: params.method || 'get',
                data: params.data,
                success: (res) => {
                    this.handlerResolve(res, resolve, reject);
                },
                fail: (err) => {
                    let { ifHandleError } = params;
                    this.handlerReject(err, reject, ifHandleError);
                },
                complete: () => {
                    this.handleComplete();
                }
            })
        });
    }
}

export default request
