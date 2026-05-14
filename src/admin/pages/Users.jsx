import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ================= PAGINATION STATES =================

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 5;

  // ================= GET USERS =================
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/users"
      );

      const apiUsers = await response.json();

      // LOCAL USERS
      const localUsers =
        JSON.parse(
          localStorage.getItem("users")
        ) || [];

      // REMOVE DUPLICATES
      const allUsers = [
        ...apiUsers,
        ...localUsers,
      ];

      setUsers(allUsers);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= PAGINATION LOGIC =================

  const totalPages = Math.ceil(
    users.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const currentUsers =
    users.slice(startIndex, endIndex);

  // ================= EDIT OPEN =================
  const handleEdit = (user) => {
    setEditingUser(user);

    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);

    setShowModal(true);
  };

  // ================= UPDATE USER =================
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
        `https://fakestoreapi.com/users/${editingUser.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const updatedUser =
        await response.json();

      const updatedUsers = users.map((u) =>
        u.id === editingUser.id
          ? { ...u, ...updatedUser }
          : u
      );

      setUsers(updatedUsers);

      toast.success(
        "User updated successfully"
      );

      setShowModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  // ================= DELETE USER =================
  const confirmDelete = async () => {
    try {
      await fetch(
        `https://fakestoreapi.com/users/${editingUser.id}`,
        {
          method: "DELETE",
        }
      );

      // REMOVE USER
      const filteredUsers = users.filter(
        (u) => u.id !== editingUser.id
      );

      // RESET IDS
      const updatedUsers =
        filteredUsers.map(
          (user, index) => ({
            ...user,
            id: index + 1,
          })
        );

      // FIX PAGE AFTER DELETE
      if (
        currentUsers.length === 1 &&
        currentPage > 1
      ) {
        setCurrentPage(currentPage - 1);
      }

      // UPDATE STATE
      setUsers(updatedUsers);

      // SAVE LOCAL STORAGE
      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      toast.success(
        "User deleted successfully"
      );

      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);

      toast.error("Delete failed");
    }
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
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>

                <td>{u.username}</td>

                <td>{u.email}</td>

                <td>{u.password}</td>

                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() =>
                      handleEdit(u)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      setEditingUser(u);
                      setShowDeleteModal(
                        true
                      );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* Left Side */}
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(
              endIndex,
              users.length
            )}{" "}
            of {users.length} entries
          </div>

          {/* Right Side */}
          <div className="pagination-container">
            {/* Previous */}
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map(
              (_, index) => (
                <button
                  key={index}
                  className={`pagination-number ${
                    currentPage ===
                    index + 1
                      ? "active-page"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentPage(
                      index + 1
                    )
                  }
                >
                  {index + 1}
                </button>
              )
            )}

            {/* Next */}
            <button
              className="pagination-btn"
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor:
              "rgba(0,0,0,0.5)",
          }}
          onClick={() =>
            setShowModal(false)
          }
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  Edit User
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setShowModal(false)
                  }
                ></button>
              </div>

              <div className="modal-body">
                <form
                  onSubmit={handleSubmit}
                >
                  <input
                    className="form-control mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                      setUsername(
                        e.target.value
                      )
                    }
                  />

                  <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                  />

                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                  />

                  <button className="btn btn-primary">
                    Update User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor:
              "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Confirm Delete
                </h5>
              </div>

              <div className="modal-body">
                <p>
                  Are you sure you want to
                  delete this user?
                </p>

                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() =>
                      setShowDeleteModal(
                        false
                      )
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