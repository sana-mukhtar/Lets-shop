import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"
type cartItemProps={
    cartItem : any;
// const subtotal = 4000;
// const tax = Math.round(subtotal * 0.18);
// const shippingCharges = 200;
// const discount = 2000;
// const total =
}
const CartItem = ({cartItem} : cartItemProps) => {
    const {photo , productId , name , price , Quantity } = cartItem
  return (
    <div>
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹ {price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{Quantity}</p>
        <button>+</button>
      </div>
      <button> <FaTrash /></button>
    </div>
  );
}

export default CartItem;
