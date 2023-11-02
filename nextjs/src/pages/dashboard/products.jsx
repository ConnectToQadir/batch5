import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Products = () => {
  var [tempImgs, setTempImgs] = useState([]);
  var [loading, setLoading] = useState(false);

  var [data, setData] = useState({
    title: "",
    category: "",
    desc: "",
    price: "",
    stock: "",
  });

  const changeHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [name]: value });
  };

  var registerInputs = [
    { lable: "Product Title", id: "title", type: "text" },
    { lable: "Category", id: "category", type: "text" },
    { lable: "Product Description", id: "desc", type: "text" },
    { lable: "Price", id: "price", type: "number" },
    { lable: "Stock", id: "stock", type: "number" },
  ];

  async function uploadImages() {
    try {
      var uploadedImagesUrls = [];

      for (var i = 0; i < tempImgs.length; i++) {
        var formData = new FormData();
        formData.append("file", tempImgs[i]);
        formData.append("upload_preset", "kjkx9fur");

        var res = await fetch(
          "https://api.cloudinary.com/v1_1/datpc4k3l/image/upload",
          {
            body: formData,
            method: "POST",
          }
        );

        res = await res.json();

        uploadedImagesUrls.push(res.secure_url);
      }

      return uploadedImagesUrls;
    } catch (error) {
      toast.error(
        "Something went wrong while trying to upload images! Please try again later."
      );
    }
  }

  const AddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    var urls = await uploadImages();

    try {
      var res = await axios.post("/api/products", { ...data, images: urls });
      if (res.data.success) {
        toast.success("Your Product Listed Successfully!");
        setData({
          title: "",
          category: "",
          desc: "",
          price: "",
          stock: "",
        });
        setTempImgs([])
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster />

      <form
        className="max-w-2xl border p-4 rounded-lg bg-white mx-auto my-20"
        onSubmit={AddProduct}
      >
        <h1 className="text-2xl mb-2 font-semibold">
          Add <span className="text-indigo-600">Product</span>
        </h1>

        {tempImgs.length ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Object.keys(tempImgs).map((v, i) => {
              return (
                <div className="" key={i}>
                  <img
                    className="rounded-md overflow-hidden"
                    src={URL.createObjectURL(tempImgs[v])}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <label
              className="w-full mb-4 block py-4 border border-indigo-600 bg-indigo-100 border-dotted text-center rounded-lg"
              htmlFor="files"
            >
              Upload Images
            </label>
            <input
              onChange={(e) => {
                e.target.files.length >= 4
                  ? alert("3 Images are allowed Only!")
                  : setTempImgs(e.target.files);
              }}
              hidden
              id="files"
              type="file"
              multiple
              required
            />
          </>
        )}

        {registerInputs.map((v, i) => {
          return (
            <div key={i}>
              <label className="block w-full" htmlFor={v.id}>
                {v.lable}
              </label>
              <input
                value={data[v.id]}
                required
                onChange={changeHandler}
                name={v.id}
                className="w-full border py-1 px-2 border-gray-300 rounded-md block mb-2"
                id={v.id}
                type={v.type}
                placeholder={v.lable}
              />
            </div>
          );
        })}
        <button
          disabled={loading}
          className="bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 my-1 py-2 px-3 text-white rounded-md"
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Products;
