import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { setAddItemToCart } from "../../app/CartSlice";

const Item = ({
  ifThere,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(setAddItemToCart(item));
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >

        {/* Title & Desc */}
        <div
          className={`grid items-center ${
            ifThere ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:tex-lg md:text-base font-medium filter drop-shadow">
            {title}{" "}
          </h1>
          <p className="text-slate-200 text-base md:text-sm font-normal filter drop-shadow">
            {text}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded  blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-1">
              <h1 className="md:text-sm font-normal text-slate-100">
                <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                {rating}
              </h1>
            </div>

            {/* Buttons */}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200"
              onClick={()=> onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200 text-sm text-black px-2 py-1"
            >
              {btn}
            </button>
          </div>

          {/* shoes Images */}
        </div>
        <div
          className={`flex items-center ${
            ifThere ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-image/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifThere
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64 first-letter:"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
