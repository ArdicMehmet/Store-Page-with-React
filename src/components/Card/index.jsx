import React from "react";

function Card({ imgSrc, title, price, rating }) {
  return (
    <div className="flex flex-col gap-2 relative hover:scale-105 transition-transform duration-500 shadow-md rounded-md p-3 cursor-pointer shrink-0 justify-between">
      <figure className="w-full h-full">
        <img
          src={imgSrc}
          className="w-full h-full object-contain"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        />
      </figure>
      <figcaption className="pt-3 capitalize text-sm text-base-content/90 font-manrope">
        <h3 className="font-medium font-bold">{title}</h3>
        <div className="flex justify-between my-2">
          <p className="font-bold">{price} €</p>
          <p>rating : {rating.rate}</p>
        </div>
      </figcaption>
    </div>
  );
}

export default Card;
