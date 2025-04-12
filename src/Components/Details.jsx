import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import "./Details.css";

export default function Details() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setProduct(products.find((p) => p.id === id));
    }
  }, [products, id, product]);

  const ProductDeleteHandler = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;  

    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts); 
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/"); 
  };

  return product ? (
    <div className="details-container">
      <img className="details-image" src={product.image} alt={product.title} />
      <div className="details-content">
        <h1 className="details-title">{product.title}</h1>
        <h3 className="details-category">{product.category}</h3>
        <h2 className="details-price">${product.price}</h2>
        <p className="details-description">{product.description}</p>
        <div className="details-buttons">
          <Link to={`/edit/${product.id}`} className="details-btn edit">Edit</Link>
          <button onClick={() => ProductDeleteHandler(product.id)} className="details-btn delete">Delete</button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
