import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 6390 },
];

const pieData = [
  { name: "Search", value: 40 },
  { name: "Direct", value: 30 },
  { name: "Social", value: 30 },
];

const COLORS = ["#ff7eb3", "#7afcff", "#b388ff"];

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">

      {/* TOP CARDS */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="purple-card pink">
            <h6>Weekly Sales</h6>
            <h2>$ 15,000</h2>
            <p>Increased by 60%</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="purple-card blue">
            <h6>Weekly Orders</h6>
            <h2>45,6334</h2>
            <p>Decreased by 10%</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="purple-card green">
            <h6>Visitors Online</h6>
            <h2>95,5741</h2>
            <p>Increased by 5%</p>
          </div>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="row mt-4 g-4">

        <div className="col-lg-8">
          <div className="dashboard-box">
            <h5>Visit And Sales Statistics</h5>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#b388ff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

        <div className="col-lg-4">
          <div className="dashboard-box">
            <h5>Traffic Sources</h5>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="dashboard-box mt-4">
        <h5>Recent Orders</h5>

        <table className="table align-middle">
          <thead>
            <tr>
              <th>User</th>
              <th>Product</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Organic Apple</td>
              <td><span className="badge bg-success">Delivered</span></td>
              <td>Today</td>
            </tr>

            <tr>
              <td>Sarah</td>
              <td>Fresh Mango</td>
              <td><span className="badge bg-warning">Pending</span></td>
              <td>Yesterday</td>
            </tr>

            <tr>
              <td>Mike</td>
              <td>Tomato Pack</td>
              <td><span className="badge bg-danger">Cancelled</span></td>
              <td>2 Days Ago</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Dashboard;