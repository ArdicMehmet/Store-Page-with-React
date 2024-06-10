import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductsById,
  setBasketProductList,
} from "../../redux/productSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Rate from "../../components/Rate";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";
function Details() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products.choosenProduct);
  const loading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  const [messageShow, setMessageShow] = useState(false);

  useEffect(() => {
    dispatch(getProductsById(productId));
  }, []);

  const addToBasket = (_) => {
    dispatch(setBasketProductList(product));
    setMessageShow(true);
    setTimeout(() => {
      setMessageShow(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <Header />
      <CategoryBar />
      {loading ? (
        <Loading />
      ) : !error ? (
        <div className="relative pt-6">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 w-full p-6">
            <figure className="flex justify-center items-start w-full md:pe-6">
              <img
                className="w-full md:h-3/4 object-contain self-start"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <figcaption className="font-manrope">
              <h1 className="uppercase lg:text-3xl md:text-xl md:text-left text-lg text-center md:mb-8 mb-4">
                {product.title}
              </h1>
              <p className="md:mb-8 mb-4">{product.description}</p>
              {product ? <Rate star={product.rating} /> : ""}
              <p className="text-lg font-bold"> {product.price} €</p>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-6"
                onClick={addToBasket}
              >
                Sepete Ekle
              </button>
            </figcaption>
          </div>
        </div>
      ) : (
        <Error
          message={
            "Şuan bu hizmetimiz bakımdadır. Lütfen daha sonra tekrar deneyin."
          }
        />
      )}
      {messageShow && (
        <MessageBox msg={{ type: "success", text: "Ürün sepete eklendi" }} />
      )}
    </div>
  );
}

export default Details;
