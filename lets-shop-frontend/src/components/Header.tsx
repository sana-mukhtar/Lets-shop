import { useState } from "react";
import {
  FaLongArrowAltRight,
  FaSearch,
  FaShoppingBag,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../types/types";

// const user = { _id: "", role: "" };     //id:asdf role:admin

interface propTypes{
  user: User|null
}

const Header = ({user}:propTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-end items-stretch gap-16 flex-row h-20 bg-[#fafcfa] p-5 ">
      <Link
        to={"/"}
        className="font-bold text-lg tracking-wider mt-3 hover:text-[1.2rem] hover:text-blue-600"
      >
        HOME
      </Link>
      <Link
        to={"/search"}
        className="mt-4 hover:text-[1.2rem] hover:text-blue-600"
      >
        <FaSearch />
      </Link>
      <Link
        to={"/cart"}
        className="mt-4 hover:text-[1.2rem] hover:text-blue-600"
      >
        <FaShoppingBag />
      </Link>

      <div className="mt-4">
        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser className="hover:text-[1.2rem] hover:text-blue-600" />
            </button>

            <dialog
              open={isOpen}
              className="absolute w-28 h-28 border border-1 rounded-md float-end left-[calc(100%-9rem)]"
            >
              <div className="flex flex-col justify-center items-center p-3 gap-2">
                {user?.role === "admin" && (
                  <Link
                    to={"/admin/dashboard"}
                    className="hover:text-blue-800 hover:underline"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  to={"/orders"}
                  className="hover:text-blue-800 hover:underline"
                >
                  Orders
                </Link>
                <button className="">
                  <Link to={"/login"}>
                    <FaSignOutAlt className="hover:text-blue-800" />
                  </Link>
                </button>
              </div>
            </dialog>
          </>
        ) : (
          <Link to={"/login"}>
            <button>
              <FaLongArrowAltRight />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
