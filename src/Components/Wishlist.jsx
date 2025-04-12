import "./Wishlist.css";
import { FaHeart, FaTrashAlt, FaTshirt, FaLaptop, FaShoePrints } from "react-icons/fa";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: "$59.99",
      image: "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074308.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      title: "Stylish Smartwatch Series 5",
      price: "$199.99",
      image: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      title: "Classic White Sneakers",
      price: "$79.99",
      image: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133039.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
    },
  ];

  const suggestedItems = [
    {
      id: 101,
      title: "Leather Office Bag",
      price: "$99.99",
      image: "https://img.freepik.com/free-photo/old-brown-leather-briefcase_1101-764.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
    },
    {
      id: 102,
      title: "Smart LED Watch",
      price: "$149.99",
      image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div className="wishlist-container">
      {/* Header */}
      <header className="wishlist-header">
        <h1><FaHeart className="heart-icon" /> Your Wishlist</h1>
        <p>Here are the items you’ve saved. Move them to cart when ready!</p>
      </header>

      {/* Wishlist Items */}
      <div className="wishlist-grid">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="wishlist-info">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <button className="remove-btn">
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-msg">
            <p>Your wishlist is currently empty. Start adding items you love!</p>
          </div>
        )}
      </div>

      {/* Categories You Like */}
      <section className="wishlist-categories">
        <h2>Categories You Might Like</h2>
        <div className="category-boxes">
          <div className="category">
            <FaTshirt className="cat-icon" />
            <p>Fashion</p>
          </div>
          <div className="category">
            <FaLaptop className="cat-icon" />
            <p>Electronics</p>
          </div>
          <div className="category">
            <FaShoePrints className="cat-icon" />
            <p>Footwear</p>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="suggested-section">
        <h2>You May Also Like</h2>
        <div className="wishlist-grid">
          {suggestedItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="wishlist-info">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <button className="remove-btn">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
