import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock, quantity }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item= {
            id, name, price, category, description, img, stock
        }

        addItem(item, quantity)

    }
    
    return (
        <article className= "detail-card-container">
            <header className= "detail-card-header">
                <h2 className= "detail-card-header-name">
                {name}
                </h2> 
                <picture className="detail-card-img-container" >
                <img src={img} alt={name} className="detail-card-img" />
                </picture>
            </header>  
            <section className="detail-card-info">
                <p>
                    <p className="detail-card-info-title">
                        Descripción:
                    </p>
                    <p>{description}</p>
                </p>
                <p>
                    <p className="detail-card-info-title">
                        Stock:
                    </p>
                    <p>{stock}</p>
                </p>
                <p>
                    <p className="detail-card-info-title">
                        Precio: 
                    </p>
                    <p>{price}</p>
                </p>
            </section>
            <footer className='detail-card-footer'>
                {
                    quantityAdded > 0 ? (
                        <div className='terminar-compra-container'>
                            <Link to='/cart' className='terminar-compra'>Ir al Carrito➡️</Link>
                            <Link to='/' className='terminar-compra'>⬅️Volver al inicio</Link>
                        </div>
                        
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )

                }
            </footer>
        </article>
    )
}

export default ItemDetail