import { Link } from 'react-router-dom'
import './Item.css'



const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='item-card'>
            <header className='item-card-header'>
                <h2 className='item-card-header-name'>
                    {name}
                </h2>       
            </header>
            <picture>
                <img src={img} alt={name} className='item-card-img'/>
            </picture>
            <section className='item-info'>
                <p className='item-info-price'>
                    Precio: ${price}
                </p>
                <p className='item-info-stock'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='item-footer'>
                <Link to={`/item/${id}`} className='card-footer-button-text'>
                    + información
                </Link>
            </footer>
        </article>
    )
}

export default Item