import React from "react";

function Link({ linkName, linkAddress }) {
  return (
    <a
      className="inline-block p-4 border-b-2 border-transparent hover:border-black transition-colors duration-300"
      href="#"
    >
      {linkName}
    </a>
  );
}

export default Link;
