import React from "react";
import Card from "../../components/ui/Card";

const AddUser = () => {
  return (
    <Card>

      <h2 className="text-xl font-semibold text-[#2f3e2c] mb-6">
        Add New User
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          placeholder="Full Name"
          className="border border-gray-200 p-3 rounded-xl outline-none focus:border-[#82ae46]"
        />

        <input
          placeholder="Email"
          className="border border-gray-200 p-3 rounded-xl outline-none focus:border-[#82ae46]"
        />

        <input
          placeholder="Phone"
          className="border border-gray-200 p-3 rounded-xl outline-none focus:border-[#82ae46]"
        />

        <select className="border border-gray-200 p-3 rounded-xl outline-none">
          <option>User Role</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>Staff</option>
        </select>

        <button
          className="md:col-span-2 bg-[#82ae46] text-white py-3 rounded-xl hover:bg-green-700"
        >
          Create User
        </button>

      </form>

    </Card>
  );
};

export default AddUser;