import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/productSlice";
import Card from "../../components/Card/index";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
function Home() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const loading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  const filter = useSelector((state) => state.products.filter);

  useEffect(() => {
    !filter ? dispatch(getAllProducts()) : "";
  }, []);
  useEffect(() => {
    console.log("Loading : ", loading);
  }, [loading]);

  return (
    <>
      <main className="w-full relative">
        {loading ? (
          <Loading />
        ) : !error ? (
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
              {filteredProducts
                ? filteredProducts.map((product) => (
                    <Card
                      id={product.id}
                      title={product.title}
                      imgSrc={product.image}
                      price={product.price}
                      key={Math.floor(Math.random() * Date.now())}
                    />
                  ))
                : ""}
            </div>
          </div>
        ) : (
          <Error
            message={
              "Şuan bu hizmetimiz bakımdadır. Lütfen daha sonra tekrar deneyin."
            }
          />
        )}
      </main>
    </>
  );
}

export default Home;
