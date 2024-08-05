import api from "../Components/Api";

//icons
import { FaBox } from "react-icons/fa";

//useefect
import { useEffect, useState } from "react";

//usecontext
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export interface PropsLista {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export function Home() {
  const [data, setData] = useState<PropsLista[]>([]);

  const { setCart } = useContext(CartContext);

  useEffect(() => {
    async function conectApi() {
      const apiConect = await api.get("/products");
      setData(apiConect.data);
    }

    conectApi();
  }, []);

  function adicionarProduto(item: PropsLista) {
    setCart(item);
  }

  return (
    <div className="flex w-full h-screen mr-auto justify-center  bg-slate-100">
      <div className="flex flex-col mt-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center max-w-full m-1 bg-white"
            >
              <h2 className="flex font-thin mb-3 p-2">{item.title}</h2>
              <img
                src={item.cover}
                alt={item.description}
                className=" flex items-center justify-center w-40 rounded-lg max-h-70 mb-2 hover:scale-[1.1] translate-x-4 skew-y-3 md:transform-none cursor-pointer"
              />
              <div className="flex items-center justify-center gap-2 m-2">
                <button onClick={() => adicionarProduto(item)}>
                  <FaBox
                    color="black"
                    className="cursor-pointer hover:scale-[1.1]"
                  />
                </button>
                <p className="font-thin">
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
