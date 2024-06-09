import React, { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setBasketModal } from "../../redux/productSlice";

function BasketModal() {
  const dispatch = useDispatch();
  const closeBasketModal = (_) => dispatch(setBasketModal());
  const [totalPrice, setTotalPrice] = useState(0);
  const basketProductList = useSelector(
    (state) => state.products.basketProductList
  );

  useEffect(() => {
    setTotalPrice(0);
    basketProductList?.forEach((product) => {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * product.quantity
      );
    });
  }, [basketProductList]);
  return (
    <div className="basket-modal bg-gray-700 sm:w-[400px] transition-all w-full fixed top-0 right-0 z-20 h-dvh overflow-y-auto overflow-x-hidden flex flex-col p-6 transition-all">
      <div className="flex justify-end">
        <RiCloseLargeFill
          className="bg-gray-300 rounded-full box-content p-2 hover:opacity-70 cursor-pointer"
          onClick={closeBasketModal}
        />
      </div>
      <div className="basket-container w-full font-manrope text-white">
        <ul className="flex flex-col gap-8 mt-6">
          {basketProductList.length > 0 ? (
            basketProductList?.map((product) => (
              <li
                key={Math.floor(Math.random() * Date.now())}
                className="flex flex-row flex-nowrap w-full gap-x-4"
              >
                <p className="flex-auto">{product.title}</p>
                <p className="flex-none">x {product.quantity}</p>
                <p className="flex-none text-green-300">{product.price} €</p>
              </li>
            ))
          ) : (
            <li key={Math.floor(Math.random() * Date.now())}>
              Sepetinizde ürün yok
            </li>
          )}
        </ul>
        <div className="total-container mt-10 border-t-2 pt-6 text-right text-green-300 flex sm:flex-row justify-between">
          <p>Total :</p>
          <p className="total-amount ">{totalPrice.toFixed(2)} €</p>
        </div>
      </div>
    </div>
  );
}

export default BasketModal;
