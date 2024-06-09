import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import "./style.css";
import { setBasketModal } from "../../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const openBasketModal = (_) => dispatch(setBasketModal());
  const basketList = useSelector((state) => state.products.basketProductList);
  const [countProduct, setCountProduct] = useState(0);
  useEffect(() => {
    let count = 0;
    basketList?.forEach((product) => {
      count += product?.count;
    });
    setCountProduct(count);
  }, [basketList]);

  return (
    <header className="bg-gray-100">
      <nav>
        <div className="container max-w-[1200px] flex justify-between items-center px-6 md:px-0 py-6">
          <p className="font-manrope text-2xl uppercase">Store</p>
          {/* <ul className="flex justify-between items-center h-[75px] font-manrope text-xl md:gap-8 gap-2">
            <li>
              <Link to={"/"} href="#">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to={"/about"}>Hakkımızda</Link>
            </li>
            <li>
              <Link to={"/communication"}>İletişim</Link>
            </li>
          </ul> */}
          <div
            className="basket relative cursor-pointer"
            onClick={openBasketModal}
          >
            <SlBasket className="text-3xl" />
            {countProduct > 0 ? (
              <p className="text-xs number bg-red-600 text-white font-manrope flex justify-center items-center box-content">
                {countProduct}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
