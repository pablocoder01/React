import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[itemId])

    return(
        <div className='item-detail-container'>
            <h2 className='item-detail-title'>Detalle del Producto</h2>
            <ItemDetail  {...product} />
            
        </div>
    )
}

export default ItemDetailContainer