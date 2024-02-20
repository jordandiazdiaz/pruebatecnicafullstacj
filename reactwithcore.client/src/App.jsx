import './App.css';
import Cart from './Components/Cart/Cart';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import WeatherForecasts from './Components/WeatherForecasts';
import Nav from './Components/Layout/Nav';
import AddNewProduct from './Components/Product/AddNewProduct';
import ViewCart from './Components/Cart/ViewCart';
import Edit from './Components/Product/Edit';
import Delete from './Components/Product/Delete';
import NotFound from './Components/Layout/NotFound';

function App() {
    return (
        <>
            <Nav />
            <div className='cardBgStyle'>
                <Routes>
                    <Route path="/" index element={<Main />} />
                    <Route path="/cart" index element={<Cart />} />
                    <Route path="/cart/addnewproduct" element={<AddNewProduct />} />
                    <Route path="/cart/ViewCart" element={<ViewCart />} />
                    <Route path="/cart/editcart/:id" element={<Edit />} />
                    <Route path="/cart/deletecart/:id" element={<Delete />} />
                    <Route path="/weatherforecasts" element={<WeatherForecasts />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </div>
        </>
    );
}

export default App;