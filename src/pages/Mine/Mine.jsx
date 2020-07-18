import Taro, {Component} from '@tarojs/taro'
import {OpenData, Text, View} from '@tarojs/components'
import {AtIcon} from "taro-ui";
import './Mine.scss'

class Mine extends Component {
    config = {
        navigationBarTitleText: '我的'
    };

    componentWillMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <View className='page mine-page'>
                <View className='mine-inner block-center'>
                    <View className='user-info'>
                        <View className='user-avatar'>
                            <OpenData type='userAvatarUrl' />
                        </View>
                        <OpenData type='userNickName' className='user-name' />
                        <View className='mobile'>17609491107</View>
                        <View className='duty'>经销商业务员</View>
                    </View>

                    <View className='at-row at-row__align--center tool-btn change-pwd' hoverClass='btn-hover'>
                        <AtIcon value='lock' size='26' color='#4B9CD8'></AtIcon>
                        <Text className='tool-txt'>修改密码</Text>
                    </View>
                    <View className='at-row at-row__align--center tool-btn user' hoverClass='btn-hover'>
                        <AtIcon value='list' size='26' color='#3DB689'></AtIcon>
                        <Text className='tool-txt'>《用户、隐私 协议》</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Mine
