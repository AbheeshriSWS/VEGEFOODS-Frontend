import React, { useState } from "react";
import Card from "../../components/ui/Card";

const Settings = () => {
  const [tab, setTab] = useState("profile");

  return (
    <Card>

      {/* TABS */}
      <div className="flex gap-4 border-b mb-6">

        <button
          onClick={() => setTab("profile")}
          className={`pb-3 ${
            tab === "profile"
              ? "border-b-2 border-[#82ae46] text-[#82ae46]"
              : "text-gray-500"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setTab("security")}
          className={`pb-3 ${
            tab === "security"
              ? "border-b-2 border-[#82ae46] text-[#82ae46]"
              : "text-gray-500"
          }`}
        >
          Security
        </button>

      </div>

      {/* CONTENT */}
      {tab === "profile" && (
        <div className="space-y-4">
          <input className="w-full border p-3 rounded-xl" placeholder="Name" />
          <input className="w-full border p-3 rounded-xl" placeholder="Email" />
        </div>
      )}

      {tab === "security" && (
        <div className="space-y-4">
          <input className="w-full border p-3 rounded-xl" placeholder="Password" />
          <input className="w-full border p-3 rounded-xl" placeholder="Confirm Password" />
        </div>
      )}

    </Card>
  );
};

export default Settings;