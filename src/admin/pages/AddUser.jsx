import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch(
        "https://fakestoreapi.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      await response.json();

      // OLD USERS
      const oldUsers =
        JSON.parse(
          localStorage.getItem("users")
        ) || [];

      // PROPER ID
      const apiStartId = 10;

      const localIds = oldUsers
        .map((u) => Number(u.id))
        .filter((id) => id > apiStartId);

      const nextId =
        localIds.length > 0
          ? Math.max(...localIds) + 1
          : 11;
      // NEW USER
      const newUser = {
        id: nextId,
        username,
        email,
        password,
      };

      // SAVE
      const updatedUsers = [
        ...oldUsers,
        newUser,
      ];

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      toast.success(
        "User added successfully"
      );

      navigate("/admin/users");

    } catch (error) {
      console.log(error);

      toast.error("Failed to add user");
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Add User</h2>

        <Link
          to="/admin/users"
          className="btn btn-secondary"
        >
          Back
        </Link>

      </div>

      <div className="dashboard-box p-4">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

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