import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Welcome to Admin Panel</p>
      </div>

      {/* STATS CARDS (we will build next step) */}
      <div className="stats-row">
  <div className="stat-card purple">
    <h3>Weekly Sales</h3>
    <p>$15,000</p>
  </div>

  <div className="stat-card blue">
    <h3>Orders</h3>
    <p>45,633</p>
  </div>

  <div className="stat-card green">
    <h3>Visitors</h3>
    <p>95,574</p>
  </div>
</div>
      {/* CHART SECTION */}
      <div className="chart-row">
        <div className="card">Sales Chart</div>
        <div className="card">Traffic Chart</div>
      </div>

      {/* TABLE SECTION */}
      <div className="card">
        <h3>Recent Tickets</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>David</td>
              <td>Payment Issue</td>
              <td>Done</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;