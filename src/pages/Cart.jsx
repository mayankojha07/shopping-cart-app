import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="overflow-hidden  mx-auto">
      {cart.length > 0 ? (
        <div className="max-w-[1200px] min-h-[80vh] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="w-[100%] md:w-[40%] flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
              <div className="flex flex-col gap-5">
                <p className="font-semibold text-xl text-green-800 uppercase">
                  Your Cart
                </p>
                <p className="font-semibold text-5xl text-green-700 -mt-5 uppercase">
                  Summary
                </p>
                <p className="text-xl">
                  <span className="font-semibold text-gray-700">
                    Total Items:
                  </span>{" "}
                  {cart.length}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  <span className="font-semibold text-gray-700">
                    Total Amount:
                  </span>{" "}
                  ${cart.reduce((acc, curr) => acc + curr.price, 0)}
                </p>
                <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-in mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider uppercase">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
          <p className="text-gray-700 text-xl mb-2 font-semibold">
            Your cart is empty!
          </p>
          <NavLink to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-in mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider uppercase">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
