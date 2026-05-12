import { useState } from "react";
import { toast } from "react-toastify";


const Forms = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully");
  };

  return (
    <div>

      <h2 className="mb-4">Add Product</h2>

      <div className="dashboard-box">

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
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default Forms;