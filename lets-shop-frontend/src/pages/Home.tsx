import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="px-[5%] py-8  flex flex-col w-full ">
      <section className="bg-[url('/src/assets/camera.jpg')] bg-no-repeat bg-cover bg-center h-[20rem] w-full"></section>

      <h1 className="text-2xl mt-12 mb-5 flex flex-row justify-between items-center">
        <>LATEST PRODUCTS </>
        <>
          <Link
            to={"/search"}
            className="text-[1rem] hover:text-blue-700 hover:underline hover:text-lg"
          >
            More{" "}
          </Link>{" "}
        </>
      </h1>

      <main className="flex flex-row gap-4 w-full overflow-hidden flex-wrap flex-1 sm:flex sm:justify-center sm:items-center">
        <ProductCard
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
          name="Macbook"
          stock={10234}
          price={34567}
          handler={addToCartHandler}
          productId="12345"
        ></ProductCard>
        <ProductCard
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
          name="Macbook"
          stock={10234}
          price={34567}
          handler={addToCartHandler}
          productId="12345"
        ></ProductCard>
        <ProductCard
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
          name="Macbook"
          stock={10234}
          price={34567}
          handler={addToCartHandler}
          productId="12345"
        ></ProductCard>
      </main>
    </div>
  );
};

export default Home;
