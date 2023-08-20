import style from "./About.module.scss";

import { MasterCard } from "../../icons/MasterCard";
import { PaySera } from "../../icons/PaySera";
import { Telegram } from "../../icons/Telegram";
import { Visa } from "../../icons/Visa";
import { WhatsApp } from "../../icons/WhatsApp";
import { Sera } from "../../icons/Sera";
import { Cooperating } from "../../icons/Cooperating";
import { Tree } from "../../icons/Tree";
import { TreeMedium } from "../../icons/TreeMedium";

import Kassa from "../../img/Kassa.png";

export function About({ dataAbout, dataContacts }) {
  return (
    <section className={style.about}>
      <Tree height={540} className={style.about__tree} />
      <TreeMedium  className={style.about__tree_medium}/>
      <div className={style.about__wrapper}>
        <div className={style.about__block}>
          <h3 className={style.about__title}>О нас</h3>
          <ul className={style.about__links}>
            {dataAbout.map((link) => (
              <li
              className={style.links__item}
              key={link.id}>
                <a className={style.links__text} href="#">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={style.about__title}>Помощь</h3>
          <ul className={style.about__links}>
            {dataContacts.map((link) => (
              <li 
        
              key={link.id}>
                <a className={style.links__text} href="#">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.about__social_icon_block} >
          <h3 className={style.about__title}>Чат-поддержка</h3>
          <div className={style.about__social_icon}>
            <WhatsApp className={style.zIndex} />
            <Telegram className={style.zIndex} />
          </div>
        </div>
      </div>
      <div className={style.about__partners_icon}>
        <Visa className={style.zIndex} />
        <MasterCard className={style.zIndex} />
        <img
          className={style.partners_icon__kassa}
          src={Kassa}
          alt="We accept free kassa"
        />
        <PaySera className={style.zIndex} />
        <Sera className={style.zIndex}  />
      </div>
      <div className={style.about__cooperating}>
        <div className={style.about__cooperating_block}>
          <Cooperating className={style.zIndex} />
          <span className={style.cooperating__text}>
            2021-2022 COMPANY NAME LTD
          </span>
        </div>
        <p className={style.cooperating__text}>Company number 1221514</p>
      </div>
    </section>
  );
}
