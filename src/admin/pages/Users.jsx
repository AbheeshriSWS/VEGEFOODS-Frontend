import { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

const Users = () => {
  const defaultUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@gmail.com",
    role: "User",
  },
  {
    id: 3,
    name: "Mike Ross",
    email: "mike@gmail.com",
    role: "Editor",
  },
];

const [users, setUsers] = useState(() => {
  const savedUsers = JSON.parse(
    localStorage.getItem("users")
  );

  // If localStorage empty → show default users
  if (!savedUsers || savedUsers.length === 0) {
    localStorage.setItem(
      "users",
      JSON.stringify(defaultUsers)
    );

    return defaultUsers;
  }

  return savedUsers;
});

  const [showModal, setShowModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Open Edit Modal
  const handleEdit = (user) => {
    setEditingUser(user);

    setName(user.name);
    setEmail(user.email);
    setRole(user.role);

    setShowModal(true);
  };

  // Update User
  const handleSubmit = (e) => {
    e.preventDefault();

   if (
  !name.trim() ||
  !email.trim() ||
  !role.trim()
) {
  toast.error("All fields are required");
  return;
}

    const updatedUsers = users.map((u) =>
      u.id === editingUser.id
        ? {
            ...u,
            name,
            email,
            role,
          }
        : u
    );

    setUsers(updatedUsers);

    localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );

    toast.success("User updated successfully");

    setShowModal(false);
  };

  // Delete User
  const confirmDelete = () => {
  const filteredUsers = users.filter(
    (u) => u.id !== editingUser.id
  );

  setUsers(filteredUsers);

  localStorage.setItem(
    "users",
    JSON.stringify(filteredUsers)
  );

  toast.success("User deleted successfully");

  setShowDeleteModal(false);
};

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Users</h2>

        <Link
  to="/admin/users/add"
  className="btn btn-success"
>
  Add User
</Link>
      </div>

      {/* Table */}
      <div className="dashboard-box">
        <table className="table table-hover align-middle">
          <thead>
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
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(u)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      setEditingUser(u);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  Edit User
                </h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control mb-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    } required
                  />

                  <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    } required
                  />

                  <select
                    className="form-select mb-3"
                    value={role}
                    onChange={(e) =>
                      setRole(e.target.value)
                    } required
                  >
                    <option value="Admin">
                      Admin
                    </option>

                    <option value="User">
                      User
                    </option>

                    <option value="Editor">
                      Editor
                    </option>
                  </select>

                  <button className="btn btn-primary">
                    Update User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onClick={() =>
            setShowDeleteModal(false)
          }
        >
          <div className="modal-dialog modal-sm">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  Confirm Delete
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setShowDeleteModal(false)
                  }
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <p>
                  Are you sure you want to delete
                  this user?
                </p>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() =>
                      setShowDeleteModal(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;