import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { PropsLista } from "./Home";
import api from "../Components/Api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Details() {
  const { setCart } = useContext(CartContext);
  const [itemEscolhido, setItemEscolhido] = useState<PropsLista>();
  console.log(itemEscolhido);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    async function conectApi() {
      const response = await api.get(`/products/${id}`);

      console.log(response.data);
      setItemEscolhido(response.data);
    }

    conectApi();
  }, [id]);

  function adicionarProduto(item: PropsLista) {
    setCart(item);
    navigator("/cart");
  }

  return (
    <div className="flex  justify-center items-center">
      {itemEscolhido && (
        <div className="flex flex-col p-8 ">
          <div className="text-center">
            <h1>{itemEscolhido?.title} </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src={itemEscolhido?.cover}
              alt={itemEscolhido?.description}
              className="max-w-52"
            />
            <p className="text-justify">{itemEscolhido?.description}</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <strong className=" border-b-2">
              {itemEscolhido?.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <button
              onClick={() => adicionarProduto(itemEscolhido)}
              className="bg-slate-500 rounded-md p-1 text-white hover:bg-slate-200 hover:text-black"
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
