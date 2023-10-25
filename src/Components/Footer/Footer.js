import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='navigation' >   
                <ul>
                    <li className='list'>
                        <a href=''>
                            <span className='icon'>🏠</span>
                            <span className='text'>Inicio</span>
                        </a>
                    </li>
                    <li className='list '>
                        <a href=''>
                            <span className='icon'>🪪</span>
                            <span className='text'>Perfil</span>
                        </a>
                    </li>
                    <li className='list active'>
                        <a href=''>
                            <span className='icon '>➕</span>
                            <span className='text'>Carrito</span>
                        </a>
                    </li>
                    <li className='list '>
                        <a href=''>
                            <span className='icon'>📩</span>
                            <span className='text'>Mensajes</span>
                        </a>
                    </li>
                    <li className='list '>
                        <a href=''>
                            <span className='icon'>⚙️</span>
                            <span className='text'>Herramientas</span>
                        </a>
                    </li>
                    <div className='indicator'></div>
                </ul>
            </div>
        </div>
      )
    }
    
    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');

    }

    list.forEach((item) => 
    item.addEventListener('click',activeLink));

    export default Footer