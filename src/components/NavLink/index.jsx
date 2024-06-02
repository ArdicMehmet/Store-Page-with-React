import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/productSlice";
import { Link } from "react-router-dom";
function NavLink({ linkName, linkAddress }) {
  const dispatch = useDispatch();

  return (
    <Link
      to={"/"}
      className="inline-block p-4 border-b-2 border-transparent hover:border-black transition-colors duration-300 uppercase"
      onClick={(_) => dispatch(setFilter(linkName))}
      href="#"
    >
      {linkName}
    </Link>
  );
}

export default NavLink;
