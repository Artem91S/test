import style from "./HelpCenter.module.scss";

import { DropDown } from "../../icons/DropDown";

import { useState } from "react";

export function HelpCenter({ dataHelpCenter }) {
  const [open, setOpen] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <section className={style.help_center}>
      <h2 className={style.help_center__title}>Популярные вопросы</h2>
      <div className={style.help_center__info_block}>
        {dataHelpCenter.map((elem) => (
          <div className={style.info_block__description} key={elem.id}>
            <div>
              <p className={style.description__text}>{elem.text}</p>
              <p
                className={
                  open === elem.id && show
                    ? style.description__options_visible
                    : style.description__options
                }
              >
                {elem.description}
              </p>
            </div>
            <div onClick={() => {setOpen(elem.id)
               setShow(!show)}}>
              <DropDown
                className={style.description__flag}
                width={20}
                height={20}
                stroke="#FFF"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
