import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, brown } from '@mui/material/colors';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button } from '@mui/material';
import { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import { Book } from "../../interface/interface";
import UserProgressContext from "../../context/User/UserProgressContext";

const theme = createTheme({
    palette: {
      primary: lime,
      secondary: brown,
    },
  });

export default function Header() {
    const cartCtx= useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    
    const totalCartItems = cartCtx?.items.reduce((totalNumberOfItems: number, item: Book) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    const handleShowCart = () => {
        userProgressCtx.showCart()
    }

    return (
        <>
        <ThemeProvider theme={theme}>
            <header id="header-bg" className=" relative flex flex-wrap  h-60 ">
                <nav className=" flex w-screen ">
                    <div className="w-full xl:px-12 py-6 px-5 flex space-x-12 items-center ">
                        <Link className="text-2xl font-bold" to="/">
                            <img
                                className="h-24 w-auto"
                                src="https://i.ibb.co/HHy0wXh/IMG-1807.png"
                                alt="logo"
                            />
                        </Link>
                        <ul className="hidden md:flex mx-auto px-5 font-semibold space-x-12  ">
                            <li>
                                <Link className="hover:text-white " to="/">
                                    <Button variant="text" color="secondary">Home</Button>
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-900" to="/books">
                                    <Button variant="text" color="secondary">New Books</Button>
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-900" to="/booksUsed">
                                    <Button variant="text" color="secondary">Used Books</Button>
                                </Link>
                            </li>
                        </ul>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <div className="mr-12 font-bold">
                                
                                    <>
                                        <p>Hello</p>
                                        
                                    </>
                                
                            </div>

                            
                                <>
                                    <div className="hidden xl:flex items-center text-gray-600 space-x-5">
                                        <Link className="hover:text-gray-900" to="/profile">
                                        <PersonOutlinedIcon />
                                            <span className="absolute flex ml-5 -mt-5">
                                                <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-green-500 opacity-75"></span>
                                                <span className="h-3 w-3 relative inline-flex rounded-full bg-green-600"></span>
                                            </span>
                                        </Link>
                                
                                          <ShoppingCartOutlinedIcon />
                                          
                                          <Button color="success" size="large" onClick={handleShowCart}> Cart ({totalCartItems})</Button>
                                        
                                        <FavoriteBorderOutlinedIcon />
                                        
                                    </div>

                                    <a
                                        onClick={() => console.log()}
                                        href="/"
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-[#557C55] to-[#A6CF98] bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-gray-700 hover:to-gray-700"
                                    >
                                        Logout
                                    </a>
                                </>
                        </div>
                    </div>
                 
                    <Link
                        className="flex xl:hidden items-center mr-6 hover:text-red-900"
                        to="/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>

                        <span className="flex absolute -mt-5 ml-4">
                            <span className="h-3 w-3 absolute bg-pink-500 opacity-75 inline-flex rounded-full animate-ping"></span>
                            <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
                        </span>
                    </Link>
                   
                </nav>
            </header>
            </ThemeProvider>
        </>
    );
}
