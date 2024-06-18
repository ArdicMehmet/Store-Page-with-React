import React, { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { setBasketModal, setClearBasketList } from "../../redux/productSlice";

function BasketModal() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [clearWarningModal, setClearWarningModal] = useState(false);
  const dispatch = useDispatch();

  const closeBasketModal = (_) => dispatch(setBasketModal());
  const clearBasket = () => {
    if (basketProductList.length > 0) {
      dispatch(setClearBasketList());
    } else {
      alert("Sepetinizde zaten ürün yok");
    }
    setClearWarningModal((prev) => !prev);
  };

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
      <div className="flex justify-between">
        {basketProductList.length > 0 ? (
          <h2
            className="text-lg text-red-600 cursor-pointer"
            onClick={(_) => setClearWarningModal((prev) => !prev)}
          >
            Clear to basket
          </h2>
        ) : (
          <div></div>
        )}
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
              There are no products in your basket
            </li>
          )}
        </ul>
        <div className="total-container mt-10 border-t-2 pt-6 text-right text-green-300 flex sm:flex-row justify-between">
          <p>Total :</p>
          <p className="total-amount ">{totalPrice.toFixed(2)} €</p>
        </div>
      </div>
      {clearWarningModal && (
        <div className="bg-white p-6 font-manrope absolute top-1 left-1 w-full h-[250px] z-30 flex flex-col justify-center items-center">
          <p>Are you sure you want to clear your basket?</p>
          <div className="flex flex-row justify-center items-center row-gap-6">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-6"
              onClick={clearBasket}
            >
              Yes
            </button>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-6"
              onClick={(_) => setClearWarningModal((prev) => !prev)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketModal;
