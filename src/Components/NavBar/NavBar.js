import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'




const NavBar = () => {
  const { totalQuantity } = useContext(CartContext)
  return (

    <div className='navBar-main-container' >
        <Link to='/' className='navBar-logo-1'>Mini<b className='navBar-logo-2'>Market</b></Link>     
        <div className='navBar-container'>
          <NavLink to={`/`} className= {({ isActive}) => isActive ? 'active-navBar-buttons' : 'navBar-buttons'} >Productos</NavLink>
          <NavLink to={`/category/pantalones`} className= {({ isActive}) => isActive ? 'active-navBar-buttons' : 'navBar-buttons'} >Pantalones</NavLink>
          <NavLink to={`/category/camisetas`} className= {({ isActive}) => isActive ? 'active-navBar-buttons' : 'navBar-buttons'} >Camisetas</NavLink>
          <NavLink to={`/category/abrigos`} className= {({ isActive}) => isActive ? 'active-navBar-buttons' : 'navBar-buttons'} >Abrigos</NavLink>
        </div>
        <div className='navBar-cart-container'>
          <Link className='navBar-cart' to={'/cart'}>🛒</Link>
          <span className='navBar-cart-number' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>{ totalQuantity }</span>      
        </div>
    </div>
    
  )
}


export default NavBar

