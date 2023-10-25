import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import CartItem from './CartElements';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CartContent.css'


const CartContent = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className='cart-content-empty-container'>
        <h1 className='cart-content-empty-text'>No hay productos en el carrito</h1>
        <Link to='/' className='cart-content-back-shopping'>⬅️Buscar productos</Link>
      </div>
    );
  }

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará todos los productos del carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: '¡Carrito vaciado!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };







  return (
    <div className='cart-content-main-container'>
      <h2 className='cart-content-title'>Carrito de compras</h2>
      <div className='cart-content-sub-container'>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
      </div>
      <div className='cart-content-main-footer'>
        <h3 className='cart-content-total-text'>Total: <p className='cart-content-total-text-number'>{total}$</p> </h3>
        <div className='cart-content-sub-footer'>
          <button onClick={handleClearCart} className='clear-cart-button'>
            Vaciar carrito
          </button>
          <Link to='/checkout' className='checkout-button'>
            Comprar
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CartContent;


