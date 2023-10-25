import './ItemCount.css'
import { useState } from 'react'
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1 ) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className='item-counter'>
            <div className='item-counter-controls'>
                <button className='item-counter-button' onClick={decrement}>➖</button>
                <h4 className='item-counter-number'>{quantity}</h4>
                <button className='item-counter-button' onClick={increment}>➕</button>
            </div>
            <div className='item-counter-button-text-container'>
                <button className='item-counter-button-text' onClick={() => {
                    onAdd(quantity);
                    toast.success('Producto agregado al carrito', {
                        transition: Slide,
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: false,
                        closeButton: true, 
                        className: 'toast-message',
                    });
                }} disabled={!stock}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount
