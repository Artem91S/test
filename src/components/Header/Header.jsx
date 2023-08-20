import style from './Header.module.scss';

import { Button } from '../Button';

import MainLogo from '../../img/MainLogo.png';
import FaceBook from '../../img/FaceBookIcon.png';
import Telegram from '../../img/TelegramIcon.png';

export function Header(){
  return (
   <nav className={style.header}>
        <img 
        className={style.header__logo}
        src={MainLogo} alt="OTT Club" />
       
        <div
        className={style.header__icons}
        >
          <img 
           className={style.icons__icon}
          src={FaceBook} alt="FaceBook" />
          <img 
           className={style.icons__icon}
          src={Telegram} alt="Telegram" />
          <p
           className={style.icons__text}
          >
        Регистрация
        </p>
       <Button 
       className={style.header__btn}
       text='Войти'
       />
        </div>
   </nav>
  )
}
