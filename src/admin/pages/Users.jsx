import { useState } from "react";
import { toast } from "react-toastify";

const Users = () => {

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
    { id: 2, name: "Sarah Smith", email: "sarah@gmail.com", role: "User" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", role: "Editor" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
    };

    setUsers([...users, newUser]);

    toast.success("User added successfully");

    setName("");
    setEmail("");
    setRole("");

    setShowForm(false);
  };

  return (
    <div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Users</h2>

        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add User"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="dashboard-box mb-4">

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              className="form-control mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Editor">Editor</option>
            </select>

            <button className="btn btn-primary">
              Save User
            </button>

          </form>

        </div>
      )}

      {/* Table */}
      <div className="dashboard-box">

        <table className="table table-hover align-middle">

          <thead >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className="badge bg-primary">
                    {u.role}
                  </span>
                </td>

                <td>
                  <button className="btn btn-sm btn-primary me-2">
                    Edit
                  </button>

                  <button className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;