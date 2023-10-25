import './CartElements.css';
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const CartElements = ({ id, name, img, description, category, price, stock, quantity }) => {
    console.log('id:', id);
    console.log('name:', name);
    console.log('img:', img);
    console.log('category:', category);
    console.log('description:', description);
    console.log('price:', price);
    console.log('stock:', stock);
    console.log('quantity:', quantity);

    const { removeItem, updateCartItem } = useContext(CartContext)



    const decrement = () => {
        if (quantity > 1) {
            const updatedQuantity = quantity - 1;
            const updatedItem = {
                id, name, img, category, description, price, stock, quantity: updatedQuantity
            }
            updateCartItem(updatedItem);
        } 
    }

    const increment = () => {
        if (quantity < stock) {
            const updatedQuantity = quantity + 1;
            const updatedItem = {
                id, name, img, category, description, price, stock, quantity: updatedQuantity
            }
            updateCartItem(updatedItem);
        }
    }     

                
    return (
        <article className="cart-card-container">
            <header className="cart-card-header">
                <h2 className="cart-card-header-name">{name}</h2>
                <picture className="cart-card-img-container">
                <img src={img} alt={name} className="cart-card-img" />
                </picture>
            </header>
            <section className="cart-card-info">
                <p>
                <p className="cart-card-info-title">
                    Categoria: 
                </p>   
                <p>{category}</p>
                </p>              
                <p>
                <p className="cart-card-info-title">
                    Stock: 
                </p>   
                <p>{stock}</p>
                </p> 
                <p>
                <p className="cart-card-info-title">
                    Precio: 
                </p>   
                <p>{price}</p>
                </p> 
                <p>
                <p className="cart-card-info-title">
                    Subtotal: 
                </p>   
                <p>{price * quantity}</p>
                </p>             
            </section>
            <footer className="cart-card-footer">
                    <div className="cart-item-counter">
                        <div className="cart-item-counter-controls">
                            <button className="cart-item-counter-button" onClick={() => decrement()}>➖</button>
                            <h4 className="cart-item-counter-number">{quantity}</h4>
                            <button className="cart-item-counter-button" onClick={() => increment()}>➕</button>
                            
                        </div>
                        <div>
                            <button className="cart-item-counter-button-text" onClick={() => removeItem(id) > 
                            toast.info("Tu Producto fue eliminado", {
                                transition: Slide,
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: true,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: false,
                                closeButton: true, 
                                className: 'toast-remove',
                          })
                    
                            }>🗑️</button>
                            
                        </div>
                    </div>  
            </footer>
        </article>
    );
}

export default CartElements;
