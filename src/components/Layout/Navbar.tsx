import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, brown, grey } from '@mui/material/colors';
import NightModeToggle from '../NightModeToggle';
import Button from '../UI/Button';

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: lime,
  },
});


const Navbar = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max">
          <Link to="/">
            <h1 className="text-3xl ">Only
              <span className="font-bold">Books</span>
            </h1>
          </Link>

          <div className="items-center justify-between hidden sm:flex">

            <ul className="hidden md:flex mx-auto px-5 font-semibold space-x-12  ">
              <li>
                <Link className="hover:text-white " to="/">
                  <Button >Home</Button>
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/books">
                  <Button >New Books</Button>
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/booksUsed">
                  <Button >Used Books</Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex sm:hidden">
            <p>Items menu mobile</p>
          </div>
          <div className="flex items-center justify-between gap-2 sm:gap-7">

            <ShoppingCartOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlinedIcon />
            <NightModeToggle />
          </div>
        </div>
      {/* </ThemeProvider> */}
    </>

  )
}

export default Navbar