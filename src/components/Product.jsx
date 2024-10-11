import React from "react";
import { add, remove } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div className="flex flex-col items-center justify-between group hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] p-4 mt-10 ml-5 gap-3 rounded-xl">
      <h2 className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg text-left">
        {item.title}
      </h2>

      <h3 className="w-40 text-[10px] text-left font-normal text-gray-400">
        {item.description.split(" ").splice(0, 10).join(" ") + "..."}
      </h3>

      <img src={item.image} alt={item.title} className="h-[180px]" />

      <div className="w-full flex justify-between items-center mt-5">
        <p className="text-green-600 font-semibold">${item.price}</p>

        <div>
          {console.log(cart)}
          {cart.some((el) => el.id === item.id) ? (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
