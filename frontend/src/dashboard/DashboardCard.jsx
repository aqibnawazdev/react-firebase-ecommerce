import React from "react";

function DashboardCard({ title, analytics, icon, stats }) {
  return (
    <div class="max-w-sm w-full sm:w-[50%] md:w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between">
        <span className=" ">{icon}</span>
        <div className=" flex justify-end flex-col items-end">
          <h5 class="mb-2 text-1xl tracking-tight text-gray-400 dark:text-white">
            {title}
          </h5>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {stats}
          </h5>
        </div>
      </div>
      <div className="divider w-full bg-black"></div>
      <div className="text-gray-500">
        <span className="text-green-600 mr-2 font-semibold">{analytics} </span>
        than last week
      </div>
    </div>
  );
}

export default DashboardCard;
