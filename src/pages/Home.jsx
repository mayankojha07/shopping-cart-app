import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductsData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.log("Error Occurred white fetching data.");
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div className="max-w-6xl min-h-[80vh] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 p-2 mb-4">
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <p className="text-2xl font-semibold">No Item Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
