import Taro from '@tarojs/taro'
import {
    ADD,
    MINUS
} from '../constants/counter'
import request from "../../util/request";

export const add = () => {
    return {
        type: ADD
    }
}
export const minus = () => {
    return {
        type: MINUS
    }
}

// 异步的action
export const asyncAdd = () => {
    return dispatch => {
        Taro.showLoading({
            title: '加载中...'
        });
        request.request({
            url: 'https://www.forguo.com/api/express/list',
            method: 'get',
        }
    ).then(res => {
            dispatch({
                type: ADD,
                data: res.data
            })
        });
    }
}
