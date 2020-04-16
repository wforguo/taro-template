import { AtButton, AtForm, AtInput} from 'taro-ui'
import Taro, {Component} from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../store/actions/counter'

import './Login.less'


@connect(({counter}) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    }
}))
class Login extends Component {

    config = {
        navigationBarTitleText: '登录'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidShow() {
        console.log('componentDidShow');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidHide() {
    }

    handleSubmit() {
        Taro.showToast({
            title: '登录成功',
            icon: 'none'
        });
    };

    handleChange (stateName, value) {
        this.setState({
            [stateName]: value
        })
    }
    render() {
        return (
            <View className='component-item'>
                <AtForm onSubmit={this.handleSubmit.bind(this)}>
                    <AtInput required name='value1' title='账号' type='text' placeholder='请输入登录手机号码' value={this.state.value1} onChange={this.handleChange.bind(this, 'value1')} />
                    <AtInput required name='value2' title='密码' type='password' placeholder='请输入密码' value={this.state.value2} onChange={this.handleChange.bind(this, 'value2')} />
                    <View className='component-item__btn-group'>
                        <View className='component-item__btn-group__btn-item'>
                            <AtButton type='primary' formType='submit'>登录</AtButton>
                        </View>
                    </View>
                </AtForm>
            </View>
        )
    }
}

export default Login
