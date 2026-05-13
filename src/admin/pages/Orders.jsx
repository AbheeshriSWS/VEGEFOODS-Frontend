import { useState } from "react";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      product: "Apple",
      price: 10,
      status: "Delivered",
    },
    {
      id: 102,
      product: "Banana",
      price: 5,
      status: "Pending",
    },
    {
      id: 103,
      product: "Mango",
      price: 15,
      status: "Cancelled",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [editingOrder, setEditingOrder] = useState(null);

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  // Open Edit Modal
  const handleEdit = (order) => {
    setEditingOrder(order);

    setProduct(order.product);
    setPrice(order.price);
    setStatus(order.status);

    setShowModal(true);
  };

  // Update Order
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedOrders = orders.map((o) =>
      o.id === editingOrder.id
        ? {
            ...o,
            product,
            price,
            status,
          }
        : o
    );

    setOrders(updatedOrders);

    toast.success("Order updated successfully");

    setShowModal(false);
  };

  // Delete Order
  const confirmDelete = () => {
    const filteredOrders = orders.filter(
      (o) => o.id !== editingOrder.id
    );

    setOrders(filteredOrders);

    toast.success("Order deleted successfully");

    setShowDeleteModal(false);
  };

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
                        ? "badge bg-warning text-dark"
                        : "badge bg-danger"
                    }
                  >
                    {o.status}
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(o)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      setEditingOrder(o);
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
                  Edit Order
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
                    placeholder="Product"
                    value={product}
                    onChange={(e) =>
                      setProduct(e.target.value)
                    }
                  />

                  <input
                    className="form-control mb-3"
                    placeholder="Price"
                    value={price}
                    onChange={(e) =>
                      setPrice(e.target.value)
                    }
                  />

                  <select
                    className="form-select mb-3"
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value)
                    }
                  >
                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>

                  <button className="btn btn-primary">
                    Update Order
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
                  this order?
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

export default Orders;