import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, brown } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: brown,
  },
});


const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max bg-slate-600">
          <Link to="/">
            <h1 className="text-3xl ">Only
              <span className="font-bold">Books</span>
            </h1>
          </Link>

          <div className="items-center justify-between hidden sm:flex">

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
          </div>
          <div className="flex sm:hidden">
            <p>Items menu mobile</p>
          </div>
          <div className="flex items-center justify-between gap-2 sm:gap-7">

            <ShoppingCartOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlinedIcon />
          </div>
        </div>
      </ThemeProvider>
    </>

  )
}

export default Navbar