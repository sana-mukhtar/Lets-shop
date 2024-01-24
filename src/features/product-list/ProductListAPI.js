export const fetchAllProducts = () => {
  return new Promise(async resolve => {
    //To Do: we will not hard code server URL here
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({ data })
  })
}
