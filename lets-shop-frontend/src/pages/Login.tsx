import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [gender , setGender] = useState("");
        const [date, setDate] = useState("");
      
  return (
    <div className="login bg-white flex w-3/5 justify-center items-center h-[60vh] ">
      <main className="flex flex-col ">
        <h1 className="font-bold">LOGIN</h1>
        <div className=" inline-flex p-2 ml-1 my-1">
          <label> Gender </label>
          <select
            name=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className=" border-gray-500 mx-2 border "
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div className="inline-flex  my-2 ">
          <label htmlFor="">Date of birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-md p-0 mx-2 border border-gray-500"
          />
        </div>

        <div className=" my-2">
          <p className="">Sign In with Google</p>
          <button className="inline-flex p-1 m-1 border rounded-md mt-3 border-gray-400">
            <FcGoogle /> <span>Already Signed in Once</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login
