import React from "react";
import Linklist from "../Linklist";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/categorySlice";
function CategoryBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const categories = useSelector((state) => state.categories.categories);
  return (
    <div className="CategoryBar w-full bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <Linklist categoryList={categories} />
      </div>
    </div>
  );
}

export default CategoryBar;
