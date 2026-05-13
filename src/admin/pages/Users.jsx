import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
    { id: 2, name: "Sarah Smith", email: "sarah@gmail.com", role: "User" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", role: "Editor" },
  ]);

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