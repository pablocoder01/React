import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  console.log(cart)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const updateCartItem = (updatedItem) => {
    const updatedCart = cart.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        updateCartItem,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
