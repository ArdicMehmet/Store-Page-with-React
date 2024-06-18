import React from "react";
import NavLink from "../NavLink";
import { setFilter } from "../../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../Error";
function Linklist({ categoryList }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.categories.error);
  return (
    <div>
      {!error ? (
        <ul className="flex md:flex-row flex-col md:gap-8 gap-2 justify-center items-center font-manrope w-full border-b-2 border-gray-300">
          <li>
            <Link
              to="/"
              className="inline-block p-4 border-b-2 border-transparent hover:border-black transition-colors duration-300 uppercase"
              onClick={(_) => dispatch(setFilter(""))}
              href="#"
            >
              All Products
            </Link>
          </li>
          {categoryList.map((category) => (
            <li key={Math.floor(Math.random() * Date.now())}>
              <NavLink linkName={category} />
            </li>
          ))}
        </ul>
      ) : (
        <Error message={"Category servisi bakımdadır."} />
      )}
    </div>
  );
}

export default Linklist;
