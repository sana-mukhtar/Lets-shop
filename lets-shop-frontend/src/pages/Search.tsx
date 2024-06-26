import { useState } from "react";
import ProductCard from "../components/ProductCard";
// import { FaBars } from "react-icons/fa";

const Search = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addToCartHandler = () => {};
  const isPrev = page > 1;
  const isNext = page < 4;
  return (
    <div className="search p-5 flex justify-start items-stretch gap-8 min-h-[calc(100vh-5rem)] bg-[#f4f4f4]">
      <aside className="min-w-80 p-8 hidden sm:block flex-col justify-start items-stretch gap-2 border shadow-md bg-white border-1 border-gray-300">
        <h2 className="text-xl font-md  text-gray-600 tracking-widest">
          FILTERS
        </h2>
        <hr />
        <div className=" pt-2 ">
          <h4 className="text-md text-gray-700 font-semibold pb-1 ">Sort</h4>
          <select
            name=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-1 border-gray-300 py-2 px-2 text-sm text-gray-600 rounded-md"
          >
            <option value="none">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div className="pt-2">
          <h4 className="text-md text-gray-700 font-semibold pb-1">
            Max Price : {maxPrice || ""}
          </h4>
          <input
            name="maxPrice"
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full bg-gray-700"
          />
        </div>

        <div className="pt-2 ">
          <h4 className="text-md text-gray-700 font-semibold pb-1">Category</h4>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-1 border-gray-300 py-2 px-2 text-sm text-gray-600 rounded-md"
          >
            <option value="">All</option>
            <option value="">Camera</option>
            <option value="">Footwears</option>

            <option value="">Game</option>
            <option value="">House Decor</option>

            <option value="">Laptop</option>
            <option value="">Outfits</option>
            <option value="">Skincare</option>
            <option value="">Traditional wear</option>
          </select>
        </div>
      </aside>
      <main className="flex flex-col justify-start items-start bg-[#fff]  min-w-[calc(100vw-25rem)] px-12 shadow-md">
        <button className="block sm:hidden bg-green-800 p-2">button</button>
        <h1 className="text-3xl font-normal tracking-widest py-5 ">PRODUCTS</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 py-2 px-2 rounded-md w-[50vw] shadow-md "
        />
        <div className="flex flex-row justify-start items-start gap-4 flex-wrap overflow-y-auto">
          <div className="">
            <ProductCard
              photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
              name="Macbook"
              stock={10234}
              price={34567}
              handler={addToCartHandler}
              productId="12345"
            />
          </div>
          <div className="">
            <ProductCard
              photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
              name="Macbook"
              stock={10234}
              price={34567}
              handler={addToCartHandler}
              productId="12345"
            />
          </div>

          <div className="">
            <ProductCard
              photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
              name="Macbook"
              stock={10234}
              price={34567}
              handler={addToCartHandler}
              productId="12345"
            />
          </div>
        </div>
        <article className="flex flex-row  justify-center items-center gap-2 mb-6 lg:mx-96 mt-24 ">
          <button
            disabled={!isPrev}
            className="border border-none shadow-lg rounded-md  py-1 px-3 mx-1 bg-blue-800 text-white font-thin disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span className="flex flex-row gap-1">
            <p>{page}</p>
            <p>of</p>
            <p>{4}</p>
          </span>
          <button
            disabled={!isNext}
            className="border border-none shadow-lg  rounded-md py-1 px-3 mx-1 bg-blue-800 text-white font-thin disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
