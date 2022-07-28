/**
*
title
sku
color
price
category
rating
image
quantity
*
*/
export interface Item {
  title: string;
  sku: string;
  color: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  quantity: number;
}

let objs: Item[] = [
  {
    title: "Title",
    sku: "3834JSKU",
    color: "Black Death",
    price: 5432.89,
    category: "Backgammend",
    rating: 7.8,
    image:
      "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    quantity: 7,
  },
];

export function addObjects(newObjects) {
  objs.push(...newObjects);
}

export function getObjects() {
  return objs;
}
