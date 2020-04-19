import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import Logo from '../../assets/img/logo.png'
import './Index.less'

const HeaderLogo = function () {
    return (
        <Image src={Logo} className='top-logo'></Image>
    )
};

export default HeaderLogo
