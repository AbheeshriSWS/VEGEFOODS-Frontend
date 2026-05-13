import { useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [editingProduct, setEditingProduct] = useState(null);

  // Sample products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 10,
      status: "Active",
    },
    {
      id: 2,
      name: "Banana",
      price: 5,
      status: "Pending",
    },
  ]);

  // Open Add Modal
  const openAddModal = () => {
    setEditingProduct(null);
    setName("");
    setPrice("");
    setShowModal(true);
  };

  // Open Edit Modal
  const handleEdit = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
    setShowModal(true);
  };

  // Save Product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      // Update product
      const updatedProducts = products.map((p) =>
        p.id === editingProduct.id
          ? { ...p, name, price }
          : p
      );

      setProducts(updatedProducts);

      toast.success("Product updated successfully");
    } else {
      // Add product
      const newProduct = {
        id: products.length + 1,
        name,
        price,
        status: "Active",
      };

      setProducts([...products, newProduct]);

      toast.success("Product added successfully");
    }

    setName("");
    setPrice("");
    setShowModal(false);
  };

  // Delete Product
  const confirmDelete = () => {
    const filteredProducts = products.filter(
      (p) => p.id !== editingProduct.id
    );

    setProducts(filteredProducts);

    toast.success("Product deleted successfully");

    setShowDeleteModal(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Products</h2>

        <button
          className="btn btn-success"
          onClick={openAddModal}
        >
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="dashboard-box">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>${product.price}</td>

                <td>
                  <span
                    className={`badge ${
                      product.status === "Active"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      setEditingProduct(product);
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
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
                  {editingProduct
                    ? "Edit Product"
                    : "Add Product"}
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
                    {editingProduct
                      ? "Update Product"
                      : "Save Product"}
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
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowDeleteModal(false)}
        >
          <div className="modal-dialog modal-sm">
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  Confirm Delete
                </h5>

                <button
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>
                  Are you sure you want to delete this
                  product?
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

export default Products;