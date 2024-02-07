import { useState } from "react"

const Search = () => {
  const [sort , setSort] = useState("")
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState("");
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
      </aside>
      <main></main>
    </div>
  );
}

export default Search
