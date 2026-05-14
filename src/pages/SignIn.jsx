import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AnnBar from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function SignIn() {

  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // 🔥 Demo logic (later backend se replace karna)
  //   let user = null;

  //   if (email === "admin@gmail.com" && password === "1234") {
  //     user = { email, role: "admin" };
  //   } else {
  //     user = { email, role: "user" };
  //   }

  //   // Save user
  //   localStorage.setItem("user", JSON.stringify(user));

  //   // Redirect based on role
  //   if (user.role === "admin") {
  //     navigate("/admin");
  //   } else {
  //     navigate("/");
  //   }
  // };

  const handleLogin = async (e) => {
  e.preventDefault();

  const loginData = {
  username: email,
  password: password,
};

  try {
   const response = await fetch("https://fakestoreapi.com/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(loginData),
});

const data = await response.json();

console.log("STATUS:", response.status);
console.log("DATA:", data);

if (response.ok && data.token) {
  setIsError(false);
  setMessage("Login successful!");

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify({ username: email }));

  setEmail("");
  setPassword("");

  navigate("/");
} else {
  setIsError(true);
  setMessage(data || "Invalid login");
}

  } catch (error) {
  console.log("ERROR:", error);
  setIsError(true);
  setMessage(error.message);
}
};  

  return (
    <>
      <AnnBar />
      <Navbar />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-md-6">

              <div className="cart-detail p-5 bg-light">

                <h3 className="mb-4 text-center">
                  Welcome Back
                </h3>

                {message && (
                  <p
                    style={{
                      color: isError ? "red" : "green",
                      backgroundColor: isError ? "#ffe6e6" : "#e6ffe6",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    {message}
                  </p>
                )}

                <form onSubmit={handleLogin}>

                  {/* Email */}
                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <label>Password</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                  {/* Signup */}
                  <p className="text-center mt-4">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-success"
                      style={{ textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
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