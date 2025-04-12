import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Edit.css";

export default function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const existingProduct = products.find((p) => String(p.id) === id);
    if (existingProduct) {
      setProduct({
        title: existingProduct.title || "",
        price: existingProduct.price || "",
        description: existingProduct.description || "",
        image: existingProduct.image || "",
        category: existingProduct.category || "",
      });
    }
  }, [id, products]);

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    if (
      !product.title.trim() ||
      !product.price.toString().trim() ||
      !product.category.trim() ||
      !product.description.trim() ||
      !product.image.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const updatedList = products.map((p) =>
      String(p.id) === id ? { ...p, ...product } : p
    );

    setProducts(updatedList);
    localStorage.setItem("products", JSON.stringify(updatedList));
    toast.success("Product successfully updated!");
    navigate(-1);
  };

  if (!product) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading product...</p>;
  }

  return (
    <form onSubmit={handleEdit} className="edit-form">
      <h1 className="edit-title">Edit Product</h1>

      <input
        type="url"
        placeholder="Image URL"
        name="image"
        value={product.image}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={product.title}
        onChange={changeHandler}
      />
      <div className="edit-row">
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={changeHandler}
        />
      </div>
      <textarea
        rows="6"
        placeholder="Enter your description"
        name="description"
        value={product.description}
        onChange={changeHandler}
      />
      <div className="edit-button-container">
        <button type="submit">Edit Product</button>
      </div>
    </form>
  );
}
