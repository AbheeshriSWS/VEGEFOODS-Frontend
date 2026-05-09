import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function SignIn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AnnBar />
      <Navbar />
      {/* Login Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-md-6">

              <div className="cart-detail p-5 bg-light">

                <h3 className="mb-4 text-center">
                  Welcome Back
                </h3>

                <form>

                  {/* Email */}
                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <label>Password</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Remember */}
                  <div className="form-group d-flex justify-content-between align-items-center">

                    <div>
                      <input type="checkbox" />{" "}
                      <span>Remember me</span>
                    </div>

                    <a href="#" className="text-success">
                      Forgot Password?
                    </a>

                  </div>

                  {/* Button */}
                  <div className="form-group">

                    <button
                      type="submit"
                      className="btn btn-primary py-3 px-5 btn-block"
                    >
                      Sign In
                    </button>

                  </div>

                  {/* Signup Link */}
                  <p className="text-center mt-4">
                    Don&apos;t have an account?{" "}

                    <span
                      className="text-success"
                      style={{ cursor: "pointer" }}
                    >
                      Sign Up
                    </span>
                  </p>

                </form>

              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignIn;