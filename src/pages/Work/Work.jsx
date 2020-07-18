import Taro, {Component} from '@tarojs/taro'
import {Image, Navigator, Text, View} from '@tarojs/components'
import Skeleton from 'taro-skeleton'
import './Work.scss'

class Work extends Component {

    state = {
        loading: true
    };
    config = {
        navigationBarTitleText: '卡车胎业务通'
    };

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1200);
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        const loading = this.state.loading;
        return (
            <View className='page work-page'>
                <View className='work-inner block-center'>
                    <Skeleton
                      row={1}
                      rowHeight={160}
                      loading={loading}
                      animate
                      skeleton-custom-class='skeleton-style'
                    >
                        <View className='nav-item nav-manage'>
                            <Navigator url='/pages/Login/Login' openType='navigate' className='navigator'
                              hoverClass='nav-hover'
                            >
                                <Text className='nav-txt'>门店管理</Text>
                                <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                            </Navigator>
                        </View>
                    </Skeleton>

                    <Skeleton
                      row={1}
                      rowHeight={160}
                      loading={loading}
                      animate
                      skeleton-custom-class='skeleton-style'
                    >
                        <View className='nav-item nav-manage'>
                            <Navigator url='/pages/Login/Login' openType='navigate' className='navigator'
                              hoverClass='nav-hover'
                            >
                                <Text className='nav-txt'>门店管理</Text>
                                <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                            </Navigator>
                        </View>
                    </Skeleton>

                    <Skeleton
                      row={1}
                      rowHeight={160}
                      loading={loading}
                      animate
                      skeleton-custom-class='skeleton-style'
                    >
                        <View className='nav-item nav-manage'>
                            <Navigator url='/pages/Login/Login' openType='navigate' className='navigator'
                              hoverClass='nav-hover'
                            >
                                <Text className='nav-txt'>门店管理</Text>
                                <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                            </Navigator>
                        </View>
                    </Skeleton>

                    <Skeleton
                      row={1}
                      rowHeight={160}
                      loading={loading}
                      animate
                      skeleton-custom-class='skeleton-style'
                    >
                        <View className='nav-item nav-manage'>
                            <Navigator url='/pages/Login/Login' openType='navigate' className='navigator'
                              hoverClass='nav-hover'
                            >
                                <Text className='nav-txt'>门店管理</Text>
                                <Image src='https://www.forguo.com/blog/imgs/logo.png' className='abs nav-icon' />
                            </Navigator>
                        </View>
                    </Skeleton>
                </View>
            </View>
        )
    }
}

export default Work
