import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import Index from './pages/Index/Index'

import configStore from './store'

import './app.less'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

    config = {
        pages: [
            'pages/Index/Index',
            'pages/Login/Login',
            'pages/Mine/Mine',
            'pages/Work/Work',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '商用通',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            "list": [
                {
                    "pagePath": "pages/Index/Index",
                    "text": "首页"
                },
                {
                    "pagePath": "pages/Login/Login",
                    "text": "我的"
                }
            ]
        },
    }

    componentWillMount () {

    }

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
