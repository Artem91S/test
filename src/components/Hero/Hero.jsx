import style from "./Hero.module.scss";

import { Button } from "../Button";

import Pumpkins from "../../img/pumpkin.png";

import { Laptop } from "../../icons/Laptop";
import { Shadow } from "../../icons/Shadow";
import { FlyingMice} from "../../icons/FlyingMice";
import { Present } from "../../icons/Present";
import { Devices } from "../../icons/Devices";
import { Translation } from "../../icons/Translation";
import { Browser } from "../../icons/Browser";


export function Hero({dataHero}) {
  return (
    <section className={style.hero}>
      <div 
      className={style.hero__content}
      >
      <p className={style.hero__title}>Более 270 телеканалов в прямом эфире</p>
      <div className={style.hero__posters}>
        {dataHero.map((items) => (
          <div 
          key={items.id}
          className={items.classNameBlock}>
            <img
              className={items.classNameImg}
              src={items.src}
              alt={items.describe}
            />
            {items.itemBg}
          </div>
        ))}
        <img 
        className={style.posters__pumpkins}
        src={Pumpkins} alt='Pumpkins'/>    
        <Laptop className={style.posters__laptop_part} />
        <Shadow className={style.women__shadow} />
      </div>
      <p className={style.hero__description}>
        Национальные, познавательные, детские, кино, спортивные, новостные и
        многие другие каналы
      </p>
      <Button
        className={style.hero__btn}
        text="Протестировать 7 дней бесплатно"
      />
      </div>
      <div 
      className={style.hero__info_block}
      >
        <div
        className={style.info_block__content}
        >
          <Present
          className={style.info_block__content_icon}
          />
          <Present
          width={96}
          height={96}
          className={style.info_block__content_icon_Lg}
          />
          <div>
          <p
          className={style.content__title}
          >Бесплатный тест</p>
          <p
          className={style.content__description}
          >7 дней бесплатного тестового просмотра</p>
          </div>
        </div>
        <div
         className={style.info_block__content}
        >
          <Devices
          className={style.info_block__content_icon}
          />
          <Devices
           width={96}
           height={96}
          className={style.info_block__content_icon_Lg}
          />
          <div>
          <p
          className={style.content__title}
          >5 устройств = 1 подписка</p>
          <p
          className={style.content__description}
          >Подключайте 5 устройств в одной подписке</p>
          </div>
        </div>
        <div
         className={style.info_block__content}
        >
          <Translation
       
          className={style.info_block__content_icon}
          />
          <Translation
           width={96}
           height={96}
          className={style.info_block__content_icon_Lg}
          />
          <div>
          <p
          className={style.content__title}
          >Архив трансляций</p>
          <p
          className={style.content__description}
          >Смотрите 7 дней телеэфира в записи</p>
          </div>
        </div>
        <div
         className={style.info_block__content}
        >
          
          <Browser
          className={style.info_block__content_icon}
          />
           <Browser
            width={96}
            height={96}
          className={style.info_block__content_icon_Lg}
          />
          <div>
          <p
          className={style.content__title}
          >Без привязки к месту</p>
          <p
          className={style.content__description}
          >Смотрите любимые фильмы и передачи в любой точке мира</p>
          </div>
        </div>
      </div>
      <FlyingMice
      className={style.hero__bg}
      />
       <FlyingMice
       width={1200}
       height ={500}
      className={style.hero__bg_Lg}
      />
    </section>
  );
}
