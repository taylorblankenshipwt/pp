import { Item } from "./item/Item";
import style from "./shop.module.scss";

export function Shop() {
  return (
    <>
      <div className={style.grid}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div>help</div>
    </>
  );
}
