import Taro, {Component} from '@tarojs/taro'
import { View, Image, Text, CheckboxGroup, Checkbox } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtIcon} from 'taro-ui'
import {connect} from '@tarojs/redux'
import HeaderLogo from '../../components/HeaderLogo'
import {add, minus, asyncAdd} from '../../store/actions/counter'
import './Login.scss'

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
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            isPwd: true, // 密码显示
            agreed: false, // 统一协议
            loginLoading: false
        }
    }
    config = {
        navigationBarTitleText: ''
    }

    handleChange (stateName, value) {
        this.setState({
            [stateName]: value
        })
    }
    resetPwd () {
        Taro.showToast({
            title: '忘记密码',
            icon: 'none'
        });
    };

    handlePwdShow = () => {
        const { isPwd } = this.state;
        this.setState({
            isPwd: !isPwd
        })
    };

    handleSubmit = () => {
        const { loginLoading } = this.state;
        if (loginLoading) {
            return false;
        }
        this.setState({
            loginLoading: true
        });
        console.log('login');
        Taro.showLoading({
            title: '登录中...',
            mask: true
        });
        setTimeout(() => {
            this.setState({
                loginLoading: false
            });
            Taro.switchTab({
                url: '/pages/Work/Work'
            });
            Taro.showToast({
                title: '登录成功',
                icon: 'none'
            });
        }, 1500);
    };

    checkboxChange = () => {
        const { agreed } = this.state;
        this.setState({
            agreed: !agreed
        })
    };

    handleAgreeModal = () => {
        Taro.showToast({
            title: '协议111',
            icon: 'none'
        });
    };

    render() {
        const { mobile, password, isPwd, agreed, loginLoading } = this.state;
        return (
            <View className='page login-page'>
                <View className='login-inner block-center'>
                    <HeaderLogo />
                    <View className='login-form'>
                        <View className='at-row at-row__align--center filed-input'>
                            <View className='at-col at-col-1'>
                                <AtIcon value='iphone' size='21' color='#C5C5C5'></AtIcon>
                            </View>
                            <AtInput required border={false} name='mobile' title='' type='text' placeholder='请输入登录手机号码' value={mobile} onChange={this.handleChange.bind(this, 'value1')} />
                        </View>

                        <View className='at-row at-row__align--center filed-input'>
                            <View className='at-col at-col-1'>
                                <AtIcon value='lock' size='21' color='#C5C5C5'></AtIcon>
                            </View>
                            <AtIcon className='abs show-pwd' value='eye' size='21' color={isPwd ? '#C5C5C5' : '#666'} onClick={this.handlePwdShow}></AtIcon>
                            <AtInput required border={false} name='password' title='' type={isPwd ? 'password' : 'text'} placeholder='请输入密码' value={password} onChange={this.handleChange.bind(this, 'value2')} />
                        </View>

                        <View className='at-row at-row__justify--end'>
                            <Text className='reset-pwd' onClick={this.resetPwd}>忘记密码?</Text>
                        </View>
                        <View className='component-item__btn-group'>
                            <View className='component-item__btn-group__btn-item'>
                                <AtButton disabled={!agreed || loginLoading} type='primary' formType='submit' onClick={this.handleSubmit.bind(this)}>登录</AtButton>
                            </View>
                        </View>
                    </View>

                    <View className='at-row at-row__justify--center'>
                        <View className='agree-box'>
                            <CheckboxGroup onChange={this.checkboxChange}>
                                <View className='checkbox'>
                                    <Checkbox checked={agreed} />
                                </View>
                                <Text onClick={this.checkboxChange}>登录表示同意</Text>
                                <Text className='read-tips' onClick={this.handleAgreeModal}>《用户、隐私协议》</Text>
                            </CheckboxGroup>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login
