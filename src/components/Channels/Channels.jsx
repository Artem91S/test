import style from "./Channels.module.scss";

import { useState } from "react";

import { Button } from '../Button';

import { DropDown } from "../../icons/DropDown";
import { SpiderWeb } from "../../icons/SpiderWeb";
import { Stars } from "../../icons/Stars";

export function Channels({ categories, channel }) {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
  return (
 
    <section className={style.channels}>
      <h2
      className={style.channels__title}
      >ТВ - каналы
      <Stars/>
      </h2>
      <SpiderWeb
      className={style.bg_icon}
      />
      <p 
       className={style.channels__description}
      >
        Национальные, познавательные, детские, кино, спортивные, новостные и
        многие другие телеканалы
      </p>
      <div
      className={style.channels__filters}
      >
        {categories.map((item) => (
          <div
          key={item.id}
          >
          <Button
          text= {item.text}
          onClick={()=>{
            setActive(item.id)}
        }
          className={active === item.id ? style.active : style.filters__item }
          />
            </div>
        ))}
      </div>
      <div
      className={!show ? style.channels__icons :style.icons_show  }
      >
        {channel.map((item) => (
          <div
          style={{background:`${item.color}`}}
          className={style.icons__icon_block}
          key={item.id}>
            <img 
            className={style.icon_block__img}
            src={item.icon} alt={item.describe} />
          </div>
        ))}
      </div>
      <div 
       className={style.channels__show}
      >
        <p
        onClick={()=>setShow(!show)}
        className={style.show__text}
        >Показать все</p>
        <DropDown
        className={show ? style.show__dropdown :""}
        stroke="#FC3232"
        />
      </div>
    </section>
  );
}
