import React from "react";
import Card from "../ui/Card"; // make sure Card.jsx exists here

const DashboardTable = () => {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Product</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">

            <tr className="border-b hover:bg-[#f7f9f4]">
              <td className="py-4">Organic Tomato</td>
              <td>Rahul</td>
              <td>$120</td>
              <td>
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Delivered
                </span>
              </td>
              <td>12 Jan</td>
            </tr>

            <tr className="border-b hover:bg-[#f7f9f4]">
              <td className="py-4">Fresh Apple</td>
              <td>Neha</td>
              <td>$90</td>
              <td>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
              <td>10 Jan</td>
            </tr>

            <tr className="hover:bg-[#f7f9f4]">
              <td className="py-4">Green Spinach</td>
              <td>Amit</td>
              <td>$60</td>
              <td>
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                  Cancelled
                </span>
              </td>
              <td>08 Jan</td>
            </tr>

          </tbody>

        </table>
      </div>
    </Card>
  );
};

export default DashboardTable;