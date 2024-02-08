import { useState } from "react";
import {
  FaLongArrowAltRight,
  FaSearch,
  FaShoppingBag,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "asdf", role: "admin" };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-end items-stretch gap-14 flex-row h-20 bg-[#fafcfa] p-5 ">
      <Link to={"/"} className="font-bold ">
        HOME
      </Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>

      <div className="">
        {user?._id ? (
          <>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
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
