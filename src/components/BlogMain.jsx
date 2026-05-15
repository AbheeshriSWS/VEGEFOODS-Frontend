import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogMain() {
  const [blogs, setBlogs] = useState([]);

  // ================= FETCH DATA =================
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">

            {/* ================= BLOG LIST ================= */}
            <div className="col-lg-8 ftco-animate">
              <div className="row">

                {blogs.map((item, index) => (
                  <div className="col-md-12 d-flex ftco-animate" key={item.id}>
                    <div className="blog-entry align-self-stretch d-md-flex">

                      {/* IMAGE */}
                      <Link
                        to={`/blog-single/${item.id}`}
                        className="block-20"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundColor: "#f8f8f8",
                        }}
                      />

                      {/* TEXT */}
                      <div className="text d-block pl-md-4">

                        {/* META */}
                        <div className="meta mb-3">
                          <div>
                            <a href="javascript:void(0)">
                              {new Date().toDateString()}
                            </a>
                          </div>
                          <div>
                            <a href="javascript:void(0)">Admin</a>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="meta-chat">
                              <span className="icon-chat"></span> {index + 1}
                            </a>
                          </div>
                        </div>

                        {/* TITLE */}
                        <h3 className="heading">
                          <a href="javascript:void(0)">
                            {item.title}
                          </a>
                        </h3>

                        {/* DESCRIPTION */}
                        <p>
                          {item.description.slice(0, 120)}...
                        </p>

                        {/* BUTTON */}
                        <p>
                          <Link
                            to={`/blog-single/${item.id}`}
                            className="btn btn-primary py-2 px-3"
                          >
                            Read more
                          </Link>
                        </p>

                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="col-lg-4 sidebar ftco-animate">

              {/* SEARCH */}
              <div className="sidebar-box">
                <form action="javascript:void(0)" className="search-form">
                  <div className="form-group">
                    <span className="icon ion-ios-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>

              {/* CATEGORIES */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  {Array.from(new Set(blogs.map((b) => b.category))).map(
                    (cat, i) => (
                      <li key={i}>
                        <a href="javascript:void(0)">
                          {cat} <span>({
                            blogs.filter((b) => b.category === cat).length
                          })</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* RECENT BLOG */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Recent Blog</h3>

                {blogs.slice(0, 3).map((item) => (
                  <div className="block-21 mb-4 d-flex" key={item.id}>
                    <a
                      className="blog-img mr-4"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "#f8f8f8",
                        width: "80px",
                        height: "80px",
                      }}
                    ></a>

                    <div className="text">
                      <h3 className="heading-1">
                        <a href="javascript:void(0)">
                          {item.title.slice(0, 40)}...
                        </a>
                      </h3>

                      <div className="meta">
                        <div>
                          <a href="javascript:void(0)">
                            <span className="icon-calendar"></span>{" "}
                            {new Date().toDateString()}
                          </a>
                        </div>
                        <div>
                          <a href="javascript:void(0)">
                            <span className="icon-person"></span> Admin
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* TAG CLOUD (STATIC - OK) */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="javascript:void(0)" className="tag-cloud-link">fruits</a>
                  <a href="javascript:void(0)" className="tag-cloud-link">vegetables</a>
                  <a href="javascript:void(0)" className="tag-cloud-link">fresh</a>
                  <a href="javascript:void(0)" className="tag-cloud-link">organic</a>
                  <a href="javascript:void(0)" className="tag-cloud-link">food</a>
                </div>
              </div>

              {/* PARAGRAPH */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading">Paragraph</h3>
                <p>
                  Organic food blog powered dynamically from FakeStore API.
                  All products are displayed as blog posts in real time.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default BlogMain;