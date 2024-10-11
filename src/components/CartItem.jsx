import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div
      id="product"
      className={`flex justify-between items-center p-2 md:p-5 ${
        cart[cart.length - 1].title === item.title ? "" : "border-b-2"
      } border-slate-500 my-2 md:mx-5`}
    >
      <div className="flex flex-col md:flex-row items-center p-0 md:p-3 gap-5">
        <div className="w-[30%]">
          <img src={item.image} className="object-cover" alt={item.title} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h2 className="text-xl text-slate-700 font-semibold">{item.title}</h2>
          <h3 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").splice(0, 15).join(" ") + "..."}
          </h3>

          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="bg-red-200 group hover:bg-red-400 transition duration-300 ease-in cursor-pointer rounded-full p-3 mr-3"
            >
              <MdDelete
                fontSize="1.5em"
                className="text-red-700 group-hover:text-slate-100 transition duration-300 ease-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
