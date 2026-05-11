import React from "react";
import Card from "../../components/ui/Card";
import { MdAttachMoney, MdShoppingCart, MdPeople, MdInventory } from "react-icons/md";
import StatCard from "../../components/dashboard/StatCard";
import DashboardTable from "../../components/dashboard/DashboardTable";
import SalesChart from "../../components/dashboard/SalesChart";
import RevenuePie from "../../components/dashboard/RevenuePie";


const Dashboard = () => {
    
  return (
    
    <div className="p-6 space-y-6">

      {/* HEADER SECTION */}
      <div className="ps-3">
        <h1 className="text-3xl font-bold text-[#2f3e2c]">
          VEGEFOODS Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Organic store analytics overview
        </p>
      </div>

      {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard 
                title="Revenue" 
                value="$24,500" 
                icon={<MdAttachMoney size={30}/>} 
            />

            <StatCard 
                title="Orders" 
                value="1,245" 
                icon={<MdShoppingCart size={30} />} 
            />

            <StatCard 
                title="Customers" 
                value="845" 
                icon={<MdPeople size={30} />} 
            />

            <StatCard 
                title="Products" 
                value="325" 
                icon={<MdInventory size={30} />} 
            />

        </div>

      {/* MAIN GRID (CHART + INFO) */}
      <div className="flex gap-3">

  <select className="border p-2 rounded-xl text-sm">
    <option>Last 7 Days</option>
    <option>Last 30 Days</option>
    <option>This Year</option>
  </select>

  <button className="bg-[#82ae46] text-white px-4 py-2 rounded-xl text-sm">
    Apply
  </button>

</div>
      {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <Card className="h-[320px]">
            <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
              Sales Overview
            </h2>

            <div className="flex items-center justify-center h-full text-gray-400">
              Chart Area (we will add real chart later)
            </div>
          </Card>
        </div>

        <Card className="h-[320px]">
          <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
            Revenue Breakdown
          </h2>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Vegetables</span>
              <span className="text-[#82ae46]">45%</span>
            </div>

            <div className="flex justify-between">
              <span>Fruits</span>
              <span className="text-[#82ae46]">30%</span>
            </div>

            <div className="flex justify-between">
              <span>Dairy</span>
              <span className="text-[#82ae46]">15%</span>
            </div>

            <div className="flex justify-between">
              <span>Others</span>
              <span className="text-[#82ae46]">10%</span>
            </div>

          </div>
        </Card>

      </div> */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

  {/* SALES CHART */}
  <div className="xl:col-span-2">
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[320px]">

      <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
        Sales Overview
      </h2>

      <div className="h-[250px]">
        <SalesChart />
      </div>

    </div>
  </div>

  {/* PIE CHART */}
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[320px]">

    <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
      Revenue Breakdown
    </h2>

    <div className="h-[250px]">
      <RevenuePie />
    </div>

  </div>

</div>

<div className="space-y-4 text-sm">

  <div className="flex justify-between">
    <span>Vegetables</span>
    <span className="text-[#82ae46] font-medium">45%</span>
  </div>

  <div className="flex justify-between">
    <span>Fruits</span>
    <span className="text-[#82ae46] font-medium">30%</span>
  </div>

  <div className="flex justify-between">
    <span>Dairy</span>
    <span className="text-[#82ae46] font-medium">15%</span>
  </div>

  <div className="flex justify-between">
    <span>Others</span>
    <span className="text-[#82ae46] font-medium">10%</span>
  </div>

</div>

      {/* TABLE SECTION */}
      
<DashboardTable />
    </div>
  );
};

export default Dashboard;