import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", status: "Active" },
    { id: 2, name: "Sara Khan", email: "sara@gmail.com", status: "Inactive" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", status: "Active" },
  ];

  return (
    <div className="users-page">

      <div className="page-header">
        <h2>User Management</h2>
        <button className="add-btn">+ Add User</button>
      </div>

      <div className="table-card">

        <table className="admin-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <span className={`badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>

                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
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