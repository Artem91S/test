import style from "./Devices.module.scss";

import { Button } from "../Button";

import { SmartTV } from "../../icons/SmartTV";
import { Ios } from "../../icons/Ios";
import { AndroidTV } from "../../icons/AndroidTV";
import { LgTV } from "../../icons/LgTV";
import { Play } from "../../icons/Play";
import { Laptop } from "../../icons/Laptop";

import { dataDevice } from "./dataDevice";

export function Devices() {
  return (
    <section className={style.devices}>
      <div>
        <h2 className={style.devices__title}>Смотрите на разных устройствах</h2>
        <p className={style.devices__description}>
          Подключайте подписку FULL и смотрите любимые каналы на 5 устройствах,
          среди которых: телевизор, компьютер, планшет или смартфон
        </p>
      </div>
      
      
      <div className={style.devices__screen}>
        {dataDevice.map((items) => (
          <div key={items.id} className={items.classNameBlock}>
            <img
              className={items.classNameImg}
              src={items.src}
              alt={items.describe}
            />
            {items.itemBg}
          </div>
        ))}
        <Play className={style.devices__play_icon} />
        <Laptop width={128} className={style.devices__laptop_part} />
      </div>

      <Button
        text="Протестировать 7 дней бесплатно"
        className={style.devices__btn}
      />
      <div className={style.devices__logos}>
        <LgTV 
        className={style.devices__logos_size} />
         <LgTV 
         width={140}
         height={24}
        className={style.devices__logos_size_Lg} />
        <Ios className={style.devices__logos_size} />
        <Ios 
        width={80}
        height={24}
        className={style.devices__logos_size_Lg} />
        <AndroidTV className={style.devices__logos_size} />
        <AndroidTV 
        width={150}
        height={24}
        className={style.devices__logos_size_Lg} />
        <SmartTV className={style.devices__logos_size} />
        <SmartTV
        width={150}
         className={style.devices__logos_size_Lg} />
      </div>

    </section>
  );
}
