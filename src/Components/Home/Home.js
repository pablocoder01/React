import './Home.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Banner from '../Banner/Banner';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from '../Context/CartContext';
import CartContent from '../CartContent/CartContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';
import { getCategories } from '../../asyncMock';
import Checkout from '../Checkout/Checkout';




const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(response => {
            setCategories(response);
        }).catch(error => {
            console.error(error);
        });
    }, []);



    return (
        <div className='home-main-container'>
            <ToastContainer />
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Banner />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={categories}/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                        <Route path='*' element={<h1 className='error-404'>404 NOT FOUND</h1>}/>
                        <Route path='/cart' element={<CartContent />}/>
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </CartProvider>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Home