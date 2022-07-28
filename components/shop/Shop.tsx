import { Item } from "services/products";
import { ShopItem } from "./item/ShopItem";
import style from "./shop.module.scss";
interface ShopProps {
  items: Item[];
}

export const Shop = (items) => {
  return (
    <>
      <div className={style.grid}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
      <div>help</div>
    </>
  );
};
