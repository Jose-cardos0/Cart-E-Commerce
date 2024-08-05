import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, removeItemCart, handleSetCart } =
    useContext(CartContext);
  return (
    <div className="flex w-screen flex-col m-6">
      {cart.length < 1 ? (
        <div>
          <h1>Ops...Carrinho vazio</h1>
          <button className="bg-slate-500 p-1 rounded text-cyan-50 font-semibold hover:bg-red-400">
            <Link to={"/"}>Home</Link>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center w-4/5 justify-between border-b-4"
            >
              <img src={item.cover} alt="" className="w-40" />
              <div>
                <p>Nome: {item.title}</p>
                <p>
                  Preço:{" "}
                  {item.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => handleSetCart(item)}
                  className="bg-slate-400 w-5 items-center text-center justify-center rounded hover:bg-slate-200 cursor-pointer font-semibold"
                >
                  +
                </button>
                {item.amount}
                <button
                  onClick={() => removeItemCart(item)}
                  className="bg-slate-400 w-5 items-center text-center justify-center rounded hover:bg-slate-200 cursor-pointer font-semibold"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 ? (
        <div className="pt-3">
          <p className="font-bold">Carrinho: {total} </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
