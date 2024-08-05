import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import { PropsLista } from "./Home";

export function Details() {
  const { itemSelecionado, setCart } = useContext(CartContext);

  function adicionarProduto(item: PropsLista) {
    setCart(item);
  }

  return (
    <div className="flex  justify-center items-center">
      {itemSelecionado.map((item) => (
        <div key={item.id} className="flex flex-col p-8 ">
          <div className="text-center">
            <h1>{item.title}</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={item.cover} alt={item.description} className="max-w-52" />
            <p className="text-justify">{item.description}</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <strong className=" border-b-2">
              {item.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <button
              onClick={() => adicionarProduto(item)}
              className="bg-slate-500 rounded-md p-1 text-white hover:bg-slate-200 hover:text-black"
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
