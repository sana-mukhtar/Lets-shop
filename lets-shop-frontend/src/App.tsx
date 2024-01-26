import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Home = lazy(()=>import("./pages/Home"))
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
