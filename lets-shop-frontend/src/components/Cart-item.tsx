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
    <div className="flex flex-row items-center px-12 py-8 justify-start gap-12 ">
      <img src={photo} alt={name} className="h-40 w-40 object-contain" />
      <article className="flex flex-col items-start justify-center gap-1 ">
        <div className="">
          <Link
            to={`/product/${productId}`}
            className="font-semibold hover:text-blue-700"
          >
            {name}
          </Link>
        </div>

        <>
          {" "}
          <span className="">₹ {price}</span>{" "}
        </>
      </article>

      <div className="flex flex-row items-start justify-center gap-6 ml-auto">
        <button className="h-8 w-8 bg-gray-200 rounded-md font-semibold hover:bg-black hover:text-white">-</button>
        <p className="font-medium ">{Quantity}</p>
        <button className="h-8 w-8 bg-gray-200  rounded-md font-semibold hover:bg-black hover:text-white">+</button>
      </div>
      <button >
        {" "}
        <FaTrash className="hover:text-red-600" />
      </button>
    </div>
  );
}

export default CartItem;
