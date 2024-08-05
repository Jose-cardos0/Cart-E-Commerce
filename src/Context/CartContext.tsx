import { createContext, ReactNode, useState } from "react";

interface CartContextData {
  cart: CartProps[];
  cartAmound: number;
  setCart: (item: CartProps) => void;
  handleSetCart: (item: CartProps) => void;
  removeItemCart: (item: CartProps) => void;
  total: string;
  selectItem: (item: CartProps) => void;
  itemSelecionado: CartProps[];
}

export interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState<CartProps[]>([]);

  const handleSetCart = (newItem: CartProps) => {
    const indexCart = cart.findIndex((item) => item.id === newItem.id);
    console.log(indexCart);
    console.log(cart);

    if (indexCart !== -1) {
      const listaItens = cart;

      console.log(listaItens);

      listaItens[indexCart].amount = listaItens[indexCart].amount + 1;
      listaItens[indexCart].total =
        listaItens[indexCart].amount * listaItens[indexCart].price;

      setCart(listaItens);
      totalResultsPrice(listaItens);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((produtos) => [...produtos, data]);
    totalResultsPrice([...cart, data]);
  };

  //   function removeItemCart(produtos: CartProps) {
  //     const indexItem = cart.findIndex((item) => item.id !== produtos.id);

  //     if (cart[indexItem]?.amount > 1) {
  //       cart[indexItem].amount -= 1;
  //     } else {
  //       const removeItem = cart.filter((item) => item.id !== produtos.id);
  //       setCart(removeItem);
  //     }
  //   }

  function removeItemCart(produtos: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === produtos.id); //encontrar item

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultsPrice(cartList);
    } else {
      const removeItem = cart.filter((item) => item.id !== produtos.id);
      setCart(removeItem);
      totalResultsPrice(removeItem);
    }
  }

  function totalResultsPrice(produtos: CartProps[]) {
    let myCart = produtos;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const formatReuslt = result.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(formatReuslt);
  }

  function selectItem(item: CartProps) {
    setItemSelecionado([item]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmound: cart.length,
        setCart: handleSetCart,
        removeItemCart,
        handleSetCart,
        total,
        selectItem,
        itemSelecionado,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
