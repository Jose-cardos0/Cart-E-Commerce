import { Link } from "react-router-dom";

//icons
import { FaCartPlus } from "react-icons/fa";

//usecontext
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function Headers() {
  const { cartAmound } = useContext(CartContext);

  return (
    <div className="flex items-center text-center justify-around bg-black ">
      <Link to={"/"}>
        <div className="flex hover:scale-75">
          <p className="font-bold text-orange-400">JS</p>
          <span className=" font-thin text-white">Developer</span>
        </div>
      </Link>
      <div className="flex gap-5">
        <Link
          to={"/"}
          className="p-1 rounded text-cyan-50 font-thin hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          className=" p-1 rounded text-cyan-50 font-thin hover:text-gray-300"
        >
          Carrinho
        </Link>
        <Link
          to={"/cart"}
          className="min-w-10 flex justify-center items-center relative w-10"
        >
          <FaCartPlus className="relative min-w-10" size={20} color="gray" />
          {cartAmound > 0 && (
            <p
              className="absolute top-0.5 left-6  bg-blue-500 px-1  rounded-full font-semibold text-white "
              style={{ fontSize: "9px" }}
            >
              {cartAmound}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
}
