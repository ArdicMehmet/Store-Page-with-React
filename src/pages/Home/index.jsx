import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  setFilter,
  getProductsById,
} from "../../redux/productSlice";
// import { getAllCategories } from "../../redux/categorySlice";
import Card from "../../components/Card/index";
import CategoryBar from "../../components/Category";
function Home() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const choosenProduct = useSelector((state) => state.products.choosenProduct);
  const loading = useSelector((state) => state.products.loading);
  const filter = useSelector((state) => state.products.filter);

  //   const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(getAllProducts());
    // dispatch(getAllCategories());
  }, []);
  useEffect(() => {
    console.log("Choosen Product : ", choosenProduct);
  }, [choosenProduct]);
  return (
    <>
      <CategoryBar />
      {/* <main className="min-h-screen w-full">
        <div className="container max-w-[1200px] mx-auto">
          {categories
            ? categories.map((category) => (
                <button
                  style={{ marginRight: "10px" }}
                  key={Math.floor(Math.random() * Date.now())}
                  onClick={(_) => dispatch(setFilter(category))}
                >
                  {category}
                </button>
              ))
            : ""}
          <p>Loading : {loading}</p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-4">
            {filteredProducts
              ? filteredProducts.map((product) => (
                  <Card
                    title={product.title}
                    imgSrc={product.image}
                    price={product.price}
                    rating={product.rating}
                    key={Math.floor(Math.random() * Date.now())}
                  />
                ))
              : ""}
          </div>
          <hr />
          <p>Filter : {filter}</p>
        </div>
      </main> */}
    </>
  );
}

export default Home;
