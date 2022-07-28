import { NextPage } from "next";
import { Shop } from "../components/shop/Shop.jsx";
import { getObjects, Item } from "../services/products/index.js";

const Shopp: NextPage<{ items: Item[] }> = ({ items }) => {
  return <Shop items={items} />;
};

Shopp.getInitialProps = async () => {
  return { items: getObjects() };
};

export default Shopp;
