import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Books from './components/Books/Books'
import BookState from './context/Book/BookState';
import CartState from './context/Cart/CartState';
import SingleBook from './components/Books/Single/SingleBook';

const Router = () => {
  return (
    <>
        <CartState>
        <BookState>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                  <Route path='books' element={<Books/>} />
                  <Route path="books/:id" element={ <SingleBook />}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </BookState>
        </CartState>
    </>
  )
}

export default Router