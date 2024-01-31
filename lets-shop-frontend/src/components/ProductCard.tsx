import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

type productsProps={
  photo : string;
  name : string;
  price : number;
  productId : string;
  stock: number;
  handler : ()=>void;


}
//const server = "shb";

const ProductCard = ({
  photo ,
  name,
  price,
  productId , stock , handler
}:productsProps) => {
  return (
    <div className="bg-white h-80 w-72 p-4 flex flex-col items-center gap-1 justify-start flex-none ">
      <img src={photo} alt={name} className="m-4 object-cover " />
      <p>{name}</p>
      <span className="text-green-700 font-bold text-base">₹{price}</span>

      <Link to={"/cart"} className="">
        <button className="bg-blue-700 flex items-center justify-center cursor-pointer text-lg h-12 w-12 rounded-full hover:rotate-[18deg]  hover:opacity-50 transition-all" onClick={() => handler()}>
          <FaPlus className="text-white"/>
        </button>
      </Link>
    </div>
  );
}

export default ProductCard
