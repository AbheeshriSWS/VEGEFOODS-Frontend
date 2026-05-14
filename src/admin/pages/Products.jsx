import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = "https://fakestoreapi.com/products";

const Products = () => {
  

  const [showModal, setShowModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [editingProduct, setEditingProduct] =
    useState(null);

  // Form States
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] =
    useState("");
  const [category, setCategory] =
    useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] =
  useState(false);

  // Pagination States
const [currentPage, setCurrentPage] =
  useState(1);

const itemsPerPage = 5;
const [products, setProducts] = useState([]);


  // =========================
  // GET PRODUCTS
  // =========================
  const fetchProducts = async () => {

      setLoading(true);

    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      toast.error(
        "Failed to fetch products"
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // =========================
// PAGINATION LOGIC
// =========================

const totalPages = Math.ceil(
  products.length / itemsPerPage
);

const startIndex =
  (currentPage - 1) * itemsPerPage;

const endIndex =
  startIndex + itemsPerPage;

const currentProducts =
  products.slice(startIndex, endIndex);


  // =========================
  // OPEN ADD MODAL
  // =========================
  const openAddModal = () => {
    setEditingProduct(null);

    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");

    setShowModal(true);
  };

  // =========================
  // OPEN EDIT MODAL
  // =========================
  const handleEdit = (product) => {
    setEditingProduct(product);

    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setCategory(product.category);
    setImage(product.image);

    setShowModal(true);
  };

  // =========================
  // ADD / UPDATE PRODUCT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !title.trim() ||
      !price ||
      !description.trim() ||
      !category.trim() ||
      !image.trim()
    ) {
      toast.error(
        "All fields are required"
      );

      return;
    }

    if (Number(price) <= 0) {
      toast.error(
        "Price must be greater than 0"
      );

      return;
    }

    const productData = {
      title,

      price: Number(price),

      description,

      category,

      image,
    };

    try {
      // =====================
      // UPDATE PRODUCT
      // =====================
      if (editingProduct) {
        const response = await fetch(
          `${API_URL}/${editingProduct.id}`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              productData
            ),
          }
        );

        const updatedProduct =
          await response.json();

        const updatedProducts =
          products.map((p) =>
            p.id === editingProduct.id
              ? updatedProduct
              : p
          );

        setProducts(updatedProducts);

        toast.success(
          "Product updated successfully"
        );
      }

      // =====================
      // ADD PRODUCT
      // =====================
      else {
        const response = await fetch(
          API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              productData
            ),
          }
        );

        const newProduct =
          await response.json();

        setProducts([
          ...products,
          newProduct,
        ]);

        toast.success(
          "Product added successfully"
        );
      }

      // Reset Form
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");

      setShowModal(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // =========================
  // DELETE PRODUCT
  // =========================
  const confirmDelete = async () => {
  try {

    // DELETE API
    await fetch(
      `${API_URL}/${editingProduct.id}`,
      {
        method: "DELETE",
      }
    );

    // REMOVE PRODUCT
    const filteredProducts =
      products.filter(
        (p) =>
          p.id !== editingProduct.id
      );

    // RESET IDS
    const updatedProducts =
  filteredProducts;

   

    // Fix page after delete
if (
  currentProducts.length === 1 &&
  currentPage > 1
) {
  setCurrentPage(currentPage - 1);
}

 // UPDATE STATE
    setProducts(updatedProducts);

    // SAVE LOCAL STORAGE
    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    toast.success(
      "Product deleted successfully"
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

              <th>Image</th>

              <th>Title</th>

              <th>Price</th>

              <th>Description</th>

              <th>Category</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>

                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    width="60"
                    height="60"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </td>

                <td>{product.title}</td>

                <td>${product.price}</td>

                <td>
                  {product.description}
                </td>

                <td>{product.category}</td>

                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() =>
                      handleEdit(product)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      setEditingProduct(
                        product
                      );

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
      products.length
    )}{" "}
    of {products.length} entries
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
            currentPage === index + 1
              ? "active-page"
              : ""
          }`}
          onClick={() =>
            setCurrentPage(index + 1)
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

      {/* ADD / EDIT MODAL */}
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
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingProduct
                    ? "Edit Product"
                    : "Add Product"}
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setShowModal(false)
                  }
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <form
                  onSubmit={handleSubmit}
                >
                  {/* Title */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) =>
                      setTitle(
                        e.target.value
                      )
                    }
                  />

                  {/* Price */}
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Price"
                    value={price}
                    onChange={(e) =>
                      setPrice(
                        e.target.value
                      )
                    }
                  />

                  {/* Description */}
                  <textarea
                    className="form-control mb-3"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                      setDescription(
                        e.target.value
                      )
                    }
                  ></textarea>

                  {/* Category */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Category"
                    value={category}
                    onChange={(e) =>
                      setCategory(
                        e.target.value
                      )
                    }
                  />

                  {/* Image URL */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) =>
                      setImage(
                        e.target.value
                      )
                    }
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

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor:
              "rgba(0,0,0,0.5)",
          }}
          onClick={() =>
            setShowDeleteModal(false)
          }
        >
          <div className="modal-dialog modal-sm">
            <div
              className="modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  Confirm Delete
                </h5>

                <button
                  className="btn-close"
                  onClick={() =>
                    setShowDeleteModal(
                      false
                    )
                  }
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <p>
                  Are you sure you want to
                  delete this product?
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

export default Products;