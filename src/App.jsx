import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header';
import ProductList from './assets/components/ProductList';
import Footer from './assets/components/Footer';
import products from "../data/products";
import { Login } from './assets/components/Login'; // Asegúrate de importar Login
import { UserProvider } from './context/UserContext'; // Asegúrate de importar UserProvider
import { Cart } from './assets/components/Cart';

const App = () => {
    return (
        <UserProvider> {/* Asegúrate de envolver todo el contenido dentro de UserProvider */}
            <Router>
                <div>
                    <Navbar />
                    <Header />
                    <Routes>
                        <Route path="/" element={<ProductList products={products} />} />
                        <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
                        <Route path="/cart" element={<Cart />} /> {/* Ruta para Cart */}    
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;