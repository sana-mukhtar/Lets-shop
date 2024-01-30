import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="px-[5%] py-8  flex flex-col w-full">
      <section className="bg-[url('/src/assets/camera.jpg')] bg-no-repeat bg-cover bg-center h-[20rem] w-full"></section>

      <h1 className="text-2xl mt-12 mb-5 flex flex-row justify-between items-center">
        <>LATEST PRODUCTS </>
        <>
          <Link to={"/search"} className="text-[1rem]">
            {" "}
            MORE{" "}
          </Link>{" "}
        </>
      </h1>

      <main className="flex flex-row  gap-4 w-full overflow-x-auto flex-wrap flex-1">
        <div className="h-96 w-72 bg-green-700"></div>
        <div className="h-96 w-72 bg-green-700"></div>
        <div className="h-96 w-72 bg-green-700"></div>
        <div className="h-96 w-72 bg-green-700"></div>
     
      </main>
    </div>
  );
}

export default Home
