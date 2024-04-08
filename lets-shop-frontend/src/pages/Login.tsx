import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../firebase";
import { useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [login] = useLoginMutation();
  // const [gender, setGender] = useState("");
  // const [date, setDate] = useState("");

  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const res = await login({
        name: "Sanaaa",
        photo: "sabaa",
        email: "sgayu",
        gender: "female",
        role: "user",
        dob: "n",
        _id: "sgghgklnbbvmmy67",
      });
      console.log(user);
      if ("data" in res) {
        toast.success(res.data.message);
      } else {
        const error = res.error as FetchBaseQueryError;
        const message = (error.data as MessageResponse).message;
        toast.error(message);
      }
    } catch (error) {
      toast.error("Sign In Failed");
    }
  };
  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center   lg:px-0 bg-white h-[calc(100vh-5rem)]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-8 tracking-tight text-gray-900">
              LOGIN
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {" "}
                  gender
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="gender"
                    placeholder="gender"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="date of birth"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already signed in once?
              <a
                href="#"
                className="font-semibold leading-6 text-blue-800 hover:text-blue-500"
                onClick={loginHandler}
              >
                Sign in with Google
              </a>
            </p>
          </div>
        </div>

        {/* <label>Gender</label> */}
        {/* <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label>Date of birth</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
     

      <div>
        <p>Already Signed In Once</p>
        <button onClick={loginHandler}>
          <FcGoogle /> <span>Sign in with Google</span>
        </button>
      </div> */}
      </div>
    </>
  );
}
