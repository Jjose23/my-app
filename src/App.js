import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from './context/CartContext';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categoria/:categoria?" element={<ItemListContainer />} />
            <Route path={`producto/:id`} element={<ItemDetailContainer />} />
            <Route path="categoria/:categoria/producto/:id" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
