import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from "../product-List/ProductList"


const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  )
}

export default Home
