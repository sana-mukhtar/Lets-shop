import { ChangeEvent, useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Shipping = () => {

  const [shippingInfo , setShippingInfo] = useState({
    firstName : "",
    lastName : "",
    address : "" , 
    city : "" , 
    number : "",
    pincode : "" , 
    state : "",
    phone : "",


  })

  const handleClick = (e: ChangeEvent<HTMLInputElement>) =>{
    setShippingInfo(prev =>({...prev , 
      [e.target.name] : e.target.value
    }))
  }
  return (
    <div className="bg-gray-50 w-[100vw]">
      <div className="flex flex-row justify-start items-stretch ml-2   pt-2 gap-[40vw] ">
        <Link to="/cart">
          <GrLinkPrevious className="h-12 w-12 rounded-md bg-gray-100 p-4 cursor-pointer hover:bg-black hover:text-white" />
        </Link>

        <h1 className="font-medium text-2xl tracking-widest ">
          SHIPPING ADDRESS
        </h1>
      </div>

      <form action="" className="align-center">
        <div className=" flex flex-col justify-center items-center gap-7 py-4  ">
          <input
required
            type="text"
            placeholder="First Name"
            name="firstName"
            value={shippingInfo.firstName}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />
          <input
          required
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={shippingInfo.lastName}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />

          {/* street */}

          <input
          required
            type="text"
            placeholder="Street Address"
            name="address"
            value={shippingInfo.address}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />

          <input
          required
            type="number"
            placeholder="Pin Code"
            name="pincode"
            value={shippingInfo.pincode}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />
          <input
          required
            type="text"
            placeholder="City & State"
            name="city"
            value={shippingInfo.city}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />
          

          <input
          required
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleClick}
            className="p-3 w-80 shadow-md"
          />
          <Link to={"/paymentpage"} className="py-2 px-2 text-center w-80 shadow-xl text-white bg-blue-900">
            Pay Now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Shipping
