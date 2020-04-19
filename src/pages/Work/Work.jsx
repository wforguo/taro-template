import Taro, {Component} from '@tarojs/taro'
import {View, Navigator, Text, Image } from '@tarojs/components'

import HeaderLogo from "../../components/HeaderLogo";
import './Work.scss'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {

                },
                {

                },
                {

                },
                {

                }
            ]
        };
    }

    config = {
        navigationBarTitleText: '卡车胎业务通'
    }

    componentWillMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        const { navList } = this.state;
        return (
            <View className='page work-page'>
                <View className='work-inner block-center'>
                    <HeaderLogo />
                    <View className='nav-list'>
                        <View className='at-row at-row__justify--center'>
                            <View className='nav-item at-col at-col-12 nav-manage'>
                                <Navigator url='/pages/Login/Login' openType='navigate' className='navigator' hoverClass={'nav-hover'}>
                                    <Text className='nav-txt'>门店管理</Text>
                                    <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                                </Navigator>
                            </View>
                        </View>

                        <View className='at-row at-row__justify--center'>
                            <View className='nav-item at-col at-col-12 nav-create'>
                                <Navigator url='/pages/Login/Login' openType='navigate' className='navigator' hoverClass={'nav-hover'}>
                                    <Text className='nav-txt'>新店申请</Text>
                                    <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                                </Navigator>
                            </View>
                        </View>

                        <View className='at-row at-row__justify--center'>
                            <View className='nav-item at-col at-col-12 nav-examine'>
                                <Navigator url='/pages/Login/Login' openType='navigate' className='navigator' hoverClass={'nav-hover'}>
                                    <Text className='nav-txt'>审核中心</Text>
                                    <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                                </Navigator>
                            </View>
                        </View>

                        <View className='at-row at-row__justify--center'>
                            <View className='nav-item at-col at-col-12 nav-sign'>
                                <Navigator url='/pages/Login/Login' openType='navigate' className='navigator' hoverClass={'nav-hover'}>
                                    <Text className='nav-txt'>在线签约</Text>
                                    <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                                </Navigator>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Work
