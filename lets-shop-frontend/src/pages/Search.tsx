import { useState } from "react"
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [sort , setSort] = useState("")
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
    const addToCartHandler = () => {};
    const isPrev = true;
    const isNext = true;
  return (
    <div className="search">
      <aside>
        <h2 className="text-lg font-bold">Filters</h2>
        <div>
          <h4 className="text-md font-semibold">sort</h4>
          <select
            name=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4 className="text-md font-semibold">
            Max Price : {maxPrice || ""}
          </h4>
          <input
            name="maxPrice"
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4 className="text-md font-semibold">Category</h4>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
      <main>
        <h1 className="text-xl font-bold">Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <ProductCard
            photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1664472289059"
            name="Macbook"
            stock={10234}
            price={34567}
            handler={addToCartHandler}
            productId="12345"
          />
        </div>

        <article>
          <button disabled={!isPrev} className="border border-black rounded-md p-1 mx-1" onClick={() => setPage((prev) => prev - 1)}>prev</button>
          <span>
            {page} of {4}
          </span>
          <button disabled={!isNext} className="border border-black  rounded-md p-1 mx-1" onClick={() => setPage((prev) => prev + 1)}>next</button>
        </article>
      </main>
    </div>
  );
}

export default Search
