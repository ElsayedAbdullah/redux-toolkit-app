import { IProduct } from "../interface";

export const addItem = (cartItems: IProduct[], product: IProduct) => {
  // check if product is existed => increase quantity
  const existed = cartItems.find((item) => item.id === product.id);
  if (existed) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty! + 1 } : item
    );
  }

  // not existed => add new
  return [...cartItems, { ...product, qty: 1 }];
};
