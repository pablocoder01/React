import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)

    }

    return (
        <div className='checkoutForm_container'>
            <form onSubmit={handleConfirm} className='checkoutForm_form'>
                <label className='checkoutForm_label'>
                    Nombre 
                    <input
                        className='checkoutForm_input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        />
                </label>
                <label className='checkoutForm_label'>
                    Telefono
                    <input
                        className='checkoutForm_input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        />
                </label>
                <label className='checkoutForm_label'>
                    Email
                    <input
                        className='checkoutForm_input'
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        />
                </label>
                <div className='checkoutForm_label'>
                    <button type='submit' className='checkoutForm_button'> Crear Orden</button>
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm