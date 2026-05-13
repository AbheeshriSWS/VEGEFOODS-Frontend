import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      role,
    };

    console.log(newUser);

    toast.success("User added successfully");

    // Clear form
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Add User</h2>

        <Link
          to="/admin/users"
          className="btn btn-secondary"
        >
          Back
        </Link>

      </div>

      {/* Form */}
      <div className="dashboard-box p-4">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            className="form-control mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Save User
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddUser;