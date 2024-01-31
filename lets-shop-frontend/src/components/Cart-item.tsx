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
    const {photo , productId , name , price , quantity , stock } = cartItem
  return (
    <div>
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
      </article>
      <span>₹ {price}</span>
    </div>
  );
}

export default CartItem;
