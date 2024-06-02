import React from "react";
import Linklist from "../Linklist";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/categorySlice";
function CategoryBar() {
  const dispatch = useDispatch();
  const choosenCategory = useSelector((state) => state.products.filter);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div className="CategoryBar w-full bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <Linklist categoryList={categories} />
        <div className="h-[48px] leading-4 flex justify-center items-center capitalize md:p-4  font-manrope">
          {choosenCategory ? choosenCategory : ""}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
