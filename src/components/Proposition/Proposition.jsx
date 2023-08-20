import style from "./Proposition.module.scss";

import { Button } from "../Button";

import { PropositionBorder } from "../../icons/PropositionBorder";

import Eye from "../../img/eye.png";
import { PropositionBorderBig } from "../../icons/PropositionBorderBig";

export function Proposition({ dataProposition }) {
  return (
    <section className={style.proposition}>
      <PropositionBorder className={style.proposition__border_normal} />
      <PropositionBorderBig 
      className={style.proposition__border_medium} />
      <div className={style.proposition__information}>
        <img
          className={style.proposition__img_size}
          src={Eye}
          alt="icon of eye"
        />

        <div className={style.proposition__card}>

          <div className={style.card__price_block}>
            <p className={style.price_block__price_value}>
              1€
              <span className={style.price_value__text}>/ МЕСЯЦ</span>
            </p>
            <p className={style.price_block__description}>
              Покупая подписку более, чем на 6 месяцев
            </p>
          </div>

          <div className={style.proposition__options}>
            {dataProposition.map((item) => (
              <div className={style.options__description} key={item.id}>
                <div>{item.icon}</div>
                <p className={style.description__text}>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={style.proposition__actions}>
            <input
              className={style.actions__email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Button
              className={style.actions__btn}
              text="Подключить тариф"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
