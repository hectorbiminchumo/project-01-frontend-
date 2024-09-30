import { useContext } from 'react'
import { currencyFormatter } from '../../util/formating'
import { Button } from '@mui/material'
import CartContext from '../../context/Cart/CartContext'
import { Link } from 'react-router-dom'

function BookItem({book}) {
  const cartCtx = useContext(CartContext)
  function handleAddBookToCart() {
    cartCtx?.addItem(book)
  }
  
  return (
    <li className='book-item'>
        <article>
        <Link to={`/books/${book._id}`}>

            <img src={`${book.image}`} alt={book.name}/>
         </Link>   
            <div>
                <h3>{book.name}</h3>
                <p className='book-item-price'>{currencyFormatter.format(book.price)}</p>
                <p className='book-item-description'>{book.description}</p>
            </div>
            <p className='book-item-actions'>
                <Button onClick={handleAddBookToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
  )
}

export default BookItem