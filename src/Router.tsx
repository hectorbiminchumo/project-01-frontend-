import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Books from './components/Books/Books'
import BookState from './context/Book/BookState';
import CartState from './context/Cart/CartState';
import SingleBook from './components/Books/Single/SingleBook';
import UserProgressState from './context/User/UserProgressState';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

const Router = () => {
  return (
    <>
        <UserProgressState>
        <CartState>
        <BookState>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                  <Route path='books' element={<Books/>} />
                  <Route path="books/:id" element={ <SingleBook />}/>
                </Route>
            </Routes>
            <Cart/>
            <Checkout />
        </BrowserRouter>
        </BookState>
        </CartState>
        </UserProgressState>
    </>
  )
}

export default Router