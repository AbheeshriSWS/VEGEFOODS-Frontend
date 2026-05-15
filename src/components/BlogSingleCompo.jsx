import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogSingleCompo() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [recent, setRecent] = useState([]);

  // ================= FETCH SINGLE BLOG =================
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // ================= FETCH RECENT BLOGS =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => setRecent(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!blog) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">

          {/* ================= MAIN BLOG ================= */}
          <div className="col-lg-8 ftco-animate">

            <h2 className="mb-3">{blog.title}</h2>

            <p>{blog.description}</p>

            <p>
              <img
                src={blog.image}
                alt="blog"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </p>

            <h2 className="mb-3 mt-5">Category: {blog.category}</h2>

            <p>
              This product belongs to <b>{blog.category}</b> category.
              It is dynamically loaded from FakeStore API using product ID.
            </p>

            {/* TAGS */}
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <a className="tag-cloud-link" href="#">Organic</a>
                <a className="tag-cloud-link" href="#">Fresh</a>
                <a className="tag-cloud-link" href="#">Natural</a>
              </div>
            </div>

          </div>

          {/* ================= SIDEBAR ================= */}
          <div className="col-lg-4 sidebar ftco-animate">

            {/* RECENT BLOG */}
            <div className="sidebar-box ftco-animate">
              <h3 className="heading">Recent Blog</h3>

              {recent.map((item) => (
                <div className="block-21 mb-4 d-flex" key={item.id}>

                  <div
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#f8f8f8",
                    }}
                  ></div>

                  <div className="text">
                    <h3 className="heading-1">
                      {item.title.slice(0, 40)}...
                    </h3>

                    <div className="meta">
                      <div>Admin</div>
                      <div>{item.category}</div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* STATIC TAG CLOUD */}
            <div className="sidebar-box ftco-animate">
              <h3 className="heading">Tag Cloud</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">fruits</a>
                <a href="#" className="tag-cloud-link">vegetables</a>
                <a href="#" className="tag-cloud-link">organic</a>
                <a href="#" className="tag-cloud-link">fresh</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSingleCompo;