import { CartItemProps } from "../../interface/interface"
import { currencyFormatter } from "../../util/formating"


const CartItem: React.FC<CartItemProps> = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem