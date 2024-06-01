// import { useEffect, useState } from "react";
import "./App.css";
import "./css/font.css";
import Home from "./pages/Home";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getAllProducts,
//   setFilter,
//   getProductsById,
// } from "./redux/productSlice";
// import { getAllCategories } from "./redux/categorySlice";
// import Card from "./components/Card";
function App() {
  // const dispatch = useDispatch();
  // const filteredProducts = useSelector(
  //   (state) => state.products.filteredProducts
  // );
  // const choosenProduct = useSelector((state) => state.products.choosenProduct);
  // const loading = useSelector((state) => state.products.loading);
  // const filter = useSelector((state) => state.products.filter);

  // const categories = useSelector((state) => state.categories.categories);
  // useEffect(() => {
  //   dispatch(getAllProducts());
  //   dispatch(getAllCategories());
  // }, []);
  // useEffect(() => {
  //   console.log("Choosen Product : ", choosenProduct);
  // }, [choosenProduct]);
  return (
    <>
      <Home />
      {/* {categories
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
            <Card
              title={product.title}
              imgSrc={product.image}
              price={product.price}
              rating={product.rating}
              key={Math.floor(Math.random() * Date.now())}
            />
          ))
        : ""}
      <hr />
      <p>Filter : {filter}</p> */}
    </>
  );
}

export default App;
