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
    <nav className="flex justify-end items-stretch gap-14 flex-row h-20 bg-gray-100 p-5">
      <Link to={"/"} className="font-bold">Home</Link>
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

            <dialog open={isOpen}>
              <div>
                {user?.role === "admin" && (
                  <Link to={"/admin/dashboard"}>Admin</Link>
                )}
                <Link to={"/orders"}>Orders</Link>
                <button>
                  <Link to={"/logout"}>
                    <FaSignOutAlt />
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
