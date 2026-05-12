import { useState } from "react";
import { toast } from "react-toastify";

const Products = () => {

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Product added successfully");

    // Clear form
    setName("");
    setPrice("");

    // Hide form after submit
    setShowForm(false);
  };

  return (
    <div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>

        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="dashboard-box mb-4">

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-3"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button className="btn btn-primary">
              Save Product
            </button>

          </form>

        </div>
      )}

      {/* Products Table */}
      <div className="dashboard-box">

        <table className="table table-hover align-middle">

          <thead >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Apple</td>
              <td>$10</td>
              <td>
                <span className="badge bg-success">
                  Active
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

            <tr>
              <td>2</td>
              <td>Banana</td>
              <td>$5</td>
              <td>
                <span className="badge bg-warning text-dark">
                  Pending
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

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Products;