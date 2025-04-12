import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Fashion Trends You Can’t Miss in 2025",
      image: "https://img.freepik.com/free-photo/group-women-spending-time-together_23-2148930912.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
      date: "April 10, 2025",
      author: "Jane Styles",
      summary:
        "Get ahead of the curve with this year's hottest fashion statements. From bold prints to eco-friendly fabrics, discover what’s turning heads.",
    },
    {
      title: "Behind the Scenes: How We Curate Products",
      image: "https://img.freepik.com/free-photo/people-preparing-photo-shooting_23-2148532469.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
      date: "March 28, 2025",
      author: "Team FakeStore",
      summary:
        "Ever wondered how we handpick the best? Here's an inside look into our process for selecting quality items you’ll love.",
    },
    {
      title: "Sustainable Shopping: Our Green Pledge",
      image: "https://img.freepik.com/free-photo/environmentally-friendly-disposable-recyclable-tableware-paper-food-boxes-plates-cutlery-cornstarch-green-grass-background_169016-4886.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
      date: "March 10, 2025",
      author: "Alex Green",
      summary:
        "We believe in a better planet. Discover our journey to become more sustainable and how your choices matter.",
    },
    {
      title: "Top 10 Must-Have Accessories This Season",
      image: "https://img.freepik.com/free-photo/open-halloween-fashion-brush-greeting-flat_1428-740.jpg?uid=R172138607&ga=GA1.1.118605225.1743533454&semt=ais_hybrid&w=740",
      date: "February 22, 2025",
      author: "Emily Rose",
      summary:
        "From statement bags to sleek watches, these accessories will level up your wardrobe instantly.",
    },
  ];

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>📝 Our Blog</h1>
        <p>Trends, tips, behind-the-scenes & everything in between.</p>
      </header>

      <section className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                <span>{post.date}</span> • <span>{post.author}</span>
              </div>
              <p>{post.summary}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
