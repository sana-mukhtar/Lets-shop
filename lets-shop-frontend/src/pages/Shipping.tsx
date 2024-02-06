import { useState } from "react";
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

  const handleClick = () =>{}
  return (
    <div className="bg-gray-50 w-[100vw]">
      <div className="flex flex-row justify-start items-stretch ml-8 pt-2 gap-[40vw] ">
        <Link to="/cart">
          <GrLinkPrevious className="h-12 w-12 rounded-md bg-gray-100 p-4 cursor-pointer hover:bg-black hover:text-white" />
        </Link>

        <h1 className="font-medium text-2xl tracking-widest ">
          SHIPPING ADDRESS
        </h1>
      </div>

      <form action="">
        <div className=" flex flex-col justify-center items-center gap-7 py-4  ">
          <input
            type="text"
            placeholder="First Name"
            name=""
            value={shippingInfo.firstName}
            onChange={handleClick}
            className="p-3 w-80"
          />
          <input
            type="text"
            placeholder="Last Name"
            name=""
            value={shippingInfo.lastName}
            onChange={handleClick}
            className="p-3 w-80"
          />

          {/* street */}

          <input
            type="text"
            placeholder="Street Address"
            name=""
            value={shippingInfo.address}
            onChange={handleClick}
            className="p-3 w-80"
          />

          <input
            type="number"
            placeholder="Pin Code"
            name=""
            value={shippingInfo.pincode}
            onChange={handleClick}
            className="p-3 w-80"
          />
          <input
            type="text"
            placeholder="City"
            name=""
            value={shippingInfo.city}
            onChange={handleClick}
            className="p-3 w-80"
          />
          <input
            type="text"
            placeholder="State"
            name=""
            value={shippingInfo.state}
            onChange={handleClick}
            className="p-3 w-80"
          />

          <input
            type="number"
            placeholder="Phone Number"
            name=""
            value={shippingInfo.phone}
            onChange={handleClick}
            className="p-3 w-80"
          />
          <button className="p-3 h-10 w-80 text-white bg-blue-900">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shipping
