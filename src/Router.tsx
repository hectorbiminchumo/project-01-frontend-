import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router