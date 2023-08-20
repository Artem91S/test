import style from './Hero.module.scss';

import Women from "../../img/women.png";
import Mobile from "../../img/mobile.png";
import Table from "../../img/table.png";
import LaptopImg from "../../img/laptop.png";
import Iphone from "../../img/iPhone.png";

import { LaptopBg } from '../../icons/LaptopBg';

export const dataHero = [
    {
        id:1,
        classNameImg:style.posters__desktop,
        src:Women,
        describe:'Desktop',
        classNameBlock:style.posters__desktop_size
    },
    {
        id:2,
        classNameImg:style.posters__laptop,
        src:LaptopImg,
        itemBg:<LaptopBg className={style.posters__laptop_bg}/>,
        describe:'Laptop',
        classNameBlock:style.posters__laptop_size
    },
    {
        id:3,
        classNameImg:style.posters__mobile,
        itemBg:<img src={Iphone} alt="photo iphone" className={style.posters__mobile_bg} />,
        src:Mobile,
        describe:'mobile',
        classNameBlock:style.posters__mobile_size

    },
    {
        id:4,
        classNameImg:style.posters__table,
        itemBg:<LaptopBg className={style.posters__table_bg}/>,
        src:Table,
        describe:'Table',
        classNameBlock:style.posters__table_size

    },
  
]