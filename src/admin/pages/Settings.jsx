import { useState } from "react";
import { toast } from "react-toastify";


const Settings = () => {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@gmail.com");

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Settings Updated");
  };

  return (
    <div>
      <h2 className="mb-4">Settings</h2>

      <div className="dashboard-box">

        <form onSubmit={handleSave}>

          <label className="mb-1">Name</label>
          <input
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="mb-1">Email</label>
          <input
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-primary">
            Save Changes
          </button>

        </form>

      </div>
    </div>
  );
};

export default Settings;