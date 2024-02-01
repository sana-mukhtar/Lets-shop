import { useEffect, useState } from "react";
import CartItem from "../components/Cart-item";
import { Link } from "react-router-dom";


const cartItems = [
  {
    productId : "qwerty" , 
    photo : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059" , 
    name : "Macbook",
    stock : 40 , 
    price : 40000 , 
    Quantity : 4
        
       
}
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 2000;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);


  useEffect(()=>{

    const timeOutID = setTimeout(()=>{
       if(Math.random() > 0.5) setIsValidCouponCode(true);
       else setIsValidCouponCode(false);
    },1000)


    return ()=>{
         clearTimeout(timeOutID);
         setIsValidCouponCode(false);
    }

  } , [couponCode])


  return (
    <div className="flex flex-row justify-between items-stretch bg-gray-50 gap-4 h-[calc(100vh-4rem)] ">
      <main className="w-[70%] h-full ">
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside className="w-[30%] text-base leading-8 pl-40 py-8 font-normal flex-col items-center justify-stretch gap-6">
        <p>Subtotal : ₹ {subtotal}</p>
        <p>Tax : ₹ {tax}</p>
        <p>Shipping Charges : ₹ {shippingCharges}</p>
        <p>
          Discount : <em className=" text-red-700">-₹{discount}</em>{" "}
        </p>
        <p>
          Total :<span className="text-green-600 font-bold"> ₹ {total}</span>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="rounded bg-gray-200 font-light p-1 w-64 mt-3 "
        />
        <div className="mt-1">
          {couponCode &&
            (isValidCouponCode ? (
              <span className="text-green-600 ">
                ₹{discount} off using the <code>{couponCode}</code>
              </span>
            ) : (
              <span className="text-red-700 text-base font-normal">
                Invalid Coupon
              </span>
            ))}

          <br />
        </div>

        {cartItems.length > 0 && (
          <Link
            to="/shipping"
            className="bg-blue-900 h-9 w-[5vw] text-white px-24 py-3 rounded-sm hover:opacity-80"
          >
            Checkout
          </Link>
        )}
      </aside>
    </div>
  );
};

export default Cart;
