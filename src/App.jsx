import Navbar from "./features/navbar/Navbar";
import ProductList from "./features/product-list/ProductList";


export default function App() {
  return <>
  <Navbar />
  <h1 className="text-3xl font-bold underline text-red-700">Hello world!</h1>
  <ProductList />
  </>
}
