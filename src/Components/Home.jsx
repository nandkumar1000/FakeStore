import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import { FaTag } from "react-icons/fa";

import "./Home.css";
import Marquee from "./Marquee";
import Testinomial from "./Testinomial";
import FakStat from "./FakeStat";

export default function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!products) return;

    if (!category || category === "undefined") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return products.length ? (
    <>
      <div className="home-container">
        {filteredProducts.map((p) => (
          <Link to={`/details/${p.id}`} key={p.id} className="product-card">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <h3 className="product-title">
              <FaTag style={{ marginRight: "6px" }} />
              {p.title.length > 40 ? p.title.slice(0, 40) + "..." : p.title}
            </h3>
          </Link>
        ))}
      </div>
      <Marquee></Marquee>
      <Testinomial />
      <FakStat></FakStat>
    </>
  ) : (
    <h2 style={{ textAlign: "center", padding: "2rem" }}>Loading products...</h2>
  );
}
