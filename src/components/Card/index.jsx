import React from "react";
import { Link } from "react-router-dom";

function Card({ id, imgSrc, title, price }) {
  return (
    <Link
      to={`/details/${id}`}
      className="flex flex-col gap-2 relative hover:scale-105 transition-transform duration-500 shadow-md rounded-md p-3 cursor-pointer shrink-0 justify-between"
    >
      <figure className="w-full h-full flex items-center">
        <img
          src={imgSrc}
          className="w-full max-h-[268px] object-contain"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        />
      </figure>
      <figcaption className="pt-3 capitalize text-sm text-base-content/90 font-manrope">
        <h3 className="font-medium font-bold">{title}</h3>
        <div className="flex justify-between my-2">
          <p className="font-bold">{price} €</p>
        </div>
      </figcaption>
    </Link>
  );
}

export default Card;
