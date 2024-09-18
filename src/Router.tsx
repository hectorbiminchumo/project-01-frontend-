import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Books from './components/Books/Books'
import BookState from './context/Book/BookState';

const Router = () => {
  return (
    <>
        <BookState>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                  <Route path='books' element={<Books/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </BookState>
    </>
  )
}

export default Router