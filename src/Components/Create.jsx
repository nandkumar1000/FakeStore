import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Create.css";

export default function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (!title || !price || !category || !description || !image) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      category,
      description,
      price,
    };

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("New product added successfully!");
    navigate("/");
  };

  return (
    <div className="create-container">
      <h1 className="create-title">Add New Product</h1>
      <form onSubmit={AddProductHandler} className="create-form">
        <input
          type="url"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          required
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <div className="create-row">
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
        <textarea
          rows="4"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
