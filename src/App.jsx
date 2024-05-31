import { useEffect, useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, setFilter, getProductsById } from "./app/productSlice";
import { getAllCategories } from "./app/categorySlice";
function App() {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const choosenProduct = useSelector((state) => state.products.choosenProduct);
  const loading = useSelector((state) => state.products.loading);
  const filter = useSelector((state) => state.products.filter);

  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);
  useEffect(() => {
    console.log("Choosen Product : ", choosenProduct);
  }, [choosenProduct]);
  return (
    <>
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
      {filteredProducts
        ? filteredProducts.map((product) => (
            <div key={Math.floor(Math.random() * Date.now())}>
              <div className="img">
                <img
                  src={product.image}
                  onClick={(_) => dispatch(getProductsById(product.id))}
                  alt={product.title}
                />
              </div>
            </div>
          ))
        : ""}
      <hr />
      <p>Filter : {filter}</p>
    </>
  );
}

export default App;
