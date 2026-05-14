import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy admin login
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      localStorage.setItem("admin", "true");

      toast.success("Admin Login Successful");

      localStorage.setItem("admin", "true");

      navigate("/admin/dashboard");

    } else {

      toast.error("Invalid Admin Credentials");

    }
  };

  return (
    <div className="container mt-5">

      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "400px" }}
      >

        <h2 className="mb-4 text-center clr-green">
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn w-100 bg-green">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;