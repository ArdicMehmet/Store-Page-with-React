import React from "react";
import Link from "../Link";

function Linklist({ categoryList }) {
  return (
    <ul className="flex md:flex-row flex-col md:gap-8 gap-2 justify-center items-center font-manrope">
      {categoryList.map((category) => (
        <li>
          <Link linkName={category} />
        </li>
      ))}
    </ul>
  );
}

export default Linklist;
