import { useContext } from "react";
import { CartContext, CartContextData } from "./CartProvider";

export const useCart = (): CartContextData => {
    return useContext<CartContextData>(CartContext);
  };
