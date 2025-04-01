
import { createContext, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: string | number;
}

export interface CartContextData {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
  }

export const CartContext = createContext<CartContextData>({
    cartItems: [],
    addToCart: () => {},// eslint-disable-line @typescript-eslint/no-empty-function
    removeFromCart: () => {},// eslint-disable-line @typescript-eslint/no-empty-function
});

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([])

    const addToCart = (product: Product) => {
      const priceAsNumber = typeof product.price === 'number' ? product.price : parseFloat(product.price);
  
      if (!isNaN(priceAsNumber)) {
        console.log("Adding to cart:", product); // Debug statement to log the product being added
        setCartItems((prevItems) => [...prevItems, { ...product, price: priceAsNumber.toString() }]);
      }
    };
    
    const removeFromCart = (productId: number) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));     
    };
  
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
  );
}
