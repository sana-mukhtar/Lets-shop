import { useEffect, useState } from "react";
import CartItem from "../components/Cart-item";

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
    <div className="flex flex-row justify-between items-center gap-16 px-16 py-8 bg-white h-[calc(100vh-4rem)] ">
      <main className="w-[70%] p-10 h-full">
        {cartItems.map((i , idx )=>(<CartItem key={idx} cartItem={i} />))}
       
      </main>
      <aside className="w-[30%] text-base leading-8  font-normal p-14 flex-col items-center justify-stretch gap-6">
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
          className="rounded bg-gray-200 font-light p-2  w-64 border-transparent"
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="text-green-600">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="text-red-700 text-base pl-1 font-normal">
              Invalid Coupon
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
