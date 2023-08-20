import style from '../Devices/Devices.module.scss';

import Device from '../../img/devices.png';
import mobiles from '../../img/mobiles.png';
import Iphone from '../../img/iPhoneSecond.png';

import { LaptopBg } from '../../icons/LaptopBg';
import { MobileBg } from '../../icons/MobileBg';

export const dataDevice = [
    {
        id:1,
        classNameImg:style.screen__desktop,
        src:Device,
        describe:'Desktop',
        classNameBlock:style.screen__desktop_size
    },
    {
        id:2,
        classNameImg:style.screen__laptop,
        src:Device,
        itemBg:<LaptopBg className={style.screen__laptop_bg}/>,
        describe:'Laptop',
        classNameBlock:style.screen__laptop_size
    },
    {
        id:3,
        classNameImg:style.screen__mobile,
        // itemBg:<img src={Iphone} alt='photo of phone'className={style.screen__mobile_bg} />,
        src:Iphone,
        describe:'mobile',
        classNameBlock:style.screen__mobile_size

    },
    {
        id:4,
        classNameImg:style.screen__table,
        itemBg:<LaptopBg className={style.screen__table_bg}/>,
        src:Device,
        describe:'Table',
        classNameBlock:style.screen__table_size

    },
  
]