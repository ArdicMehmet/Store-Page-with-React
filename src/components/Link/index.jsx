import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/productSlice";
function Link({ linkName, linkAddress }) {
  const dispatch = useDispatch();

  return (
    <a
      className="inline-block p-4 border-b-2 border-transparent hover:border-black transition-colors duration-300 uppercase"
      onClick={(_) => dispatch(setFilter(linkName))}
      href="#"
    >
      {linkName}
    </a>
  );
}

export default Link;
