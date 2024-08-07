import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/productSlice";
import Card from "../../components/Card/index";
import Loading from "../../components/Loading";
import Info from "../../components/Info";
import CategoryBar from "../../components/CategoryBar";
import Header from "../../components/Header";
function Home() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const loading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  const filter = useSelector((state) => state.products.filter);

  const messageShow = useState(false);

  useEffect(() => {
    !filter ? dispatch(getAllProducts()) : "";
  }, []);

  return (
    <div className="relative">
      <Header />
      <CategoryBar />
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
          <Info
            message={
              "This service is currently under maintenance. Please try again later."
            }
          />
        )}
      </main>
      {/* {messageShow && <MessageBox msg={{ type: "success", text: "Deneme" }} />} */}
    </div>
  );
}

export default Home;
