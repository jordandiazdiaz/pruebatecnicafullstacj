import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../App.css';

const App = () => {

    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);

    const toggleContent1 = () => setShowContent1(!showContent1);
    const toggleContent2 = () => setShowContent2(!showContent2);

    const navigate = useNavigate(); 

    const goToCart = () => {
        navigate('/cart'); 
    };

    return (
        <div className="app-container">
            <h2>Opciones</h2>
            <div className="options-grid">
                <div className="option-item" onClick={goToCart}>
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/carro.png" alt="Carrito" />
                    </div>
                    <span className="option-label">Carrito</span>
                </div>
                <div className="option-item">
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/compras.png" alt="Compras" />
                    </div>
                    <span className="option-label">Compras</span>
                </div>
                <div className="option-item">
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/salud.png" alt="Salud" />
                    </div>
                    <span className="option-label">Salud</span>
                </div>
                <div className="option-item">
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/aniversario.png" alt="Aniversario" />
                    </div>
                    <span className="option-label">Aniversario</span>
                </div>
                <div className="option-item">
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/whatsapp.png" alt="WhatsApp" />
                    </div>
                    <span className="option-label">WhatsApp</span>
                </div>
                <div className="option-item">
                    <div className="icon-container">
                        <img src="https://jordandiaz1988.000webhostapp.com/envio.png" alt="Envío" />
                    </div>
                    <span className="option-label">Envio</span>
                </div>
               
            </div>
            <h3 className="dynamic-title" onClick={toggleContent1}> Descubre 1 {showContent1 ? '▼' : '►'}</h3>
            {showContent1 && (
                <div className="content-body">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            )}
            <h3 className="dynamic-title" onClick={toggleContent2}> Descubre 2 {showContent2 ? '▼' : '►'}</h3>
            {showContent2 && (
                <div className="content-body">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            )}
        </div>
    );
}

export default App;
