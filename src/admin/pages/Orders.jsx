const Orders = () => {
  const orders = [
    { id: 101, product: "Apple", price: 10, status: "Delivered" },
    { id: 102, product: "Banana", price: 5, status: "Pending" },
    { id: 103, product: "Mango", price: 15, status: "Cancelled" },
  ];

  return (
    <div>
      <h2 className="mb-4">Orders</h2>

      <div className="dashboard-box">

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>${o.price}</td>
                <td>
                  <span
                    className={
                      o.status === "Delivered"
                        ? "badge bg-success"
                        : o.status === "Pending"
                        ? "badge bg-warning"
                        : "badge bg-danger"
                    }
                  >
                    {o.status}
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

export default Orders;