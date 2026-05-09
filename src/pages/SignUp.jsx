import Loader from "../components/Loader";
import { useEffect, useState } from "react";


import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function SignUp() {
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
      {/* Signup Section */}
      <section className="ftco-section">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-8">

              <div className="cart-detail p-5 bg-light">

                <h3 className="mb-4 text-center">
                  Create Your Account
                </h3>

                <form>

                  <div className="row">

                    {/* First Name */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    {/* Username */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Username <small>(Optional)</small>
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address</label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Mobile Number</label>

                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Password</label>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Confirm Password</label>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Gender <small>(Optional)</small>
                        </label>

                        <select className="form-control">

                          <option value="">
                            Select Gender
                          </option>

                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>

                        </select>
                      </div>
                    </div>

                    {/* Pincode */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pincode / ZIP Code</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter ZIP code"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>

                        <textarea
                          rows="4"
                          className="form-control"
                          placeholder="Enter address"
                        ></textarea>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="col-md-12">
                      <div className="form-group">

                        <input type="checkbox" />{" "}
                        <span>
                          I agree to the Terms & Conditions
                        </span>

                      </div>
                    </div>

                    {/* Button */}
                    <div className="col-md-12">

                      <button
                        type="submit"
                        className="btn btn-primary py-3 px-5 btn-block"
                      >
                        Create Account
                      </button>

                    </div>

                    {/* Sign In */}
                    <div className="col-md-12">

                      <p className="text-center mt-4">
                        Already have an account?{" "}

                        <span
                          className="text-success"
                          style={{ cursor: "pointer" }}
                        >
                          Sign In
                        </span>

                      </p>

                    </div>

                  </div>

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

export default SignUp;