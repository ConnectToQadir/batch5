import React from "react";
import axios from "axios";

const index = ({products}) => {
  return (
    <div>
      <div className="grid max-w-6xl mx-auto my-10 gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3">
        {products.map((v, i) => {
          return (
            <div className="shadow-lg border p-4 rounded-md">
              <div className="relative mb-3">
                <img src={v.images[0]} />
                <i className="bx bx-cart absolute top-4 flex justify-center items-center bg-sky-700 text-white right-4 z-10 text-xl w-10 h-10 rounded-full  shadow-lg"></i>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {v.title}
                </h2>
                <p>{v.category}</p>
                <p>$ {v.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  var res = await axios.get("http://localhost:3000/api/products");
  return { props: { products: res.data.message } };
}
