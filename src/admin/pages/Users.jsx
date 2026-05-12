const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
    { id: 2, name: "Sarah Smith", email: "sarah@gmail.com", role: "User" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", role: "Editor" },
  ];

  return (
    <div>
      <h2 className="mb-4">Users</h2>

      <div className="dashboard-box">

        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className="badge bg-primary">{u.role}</span>
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