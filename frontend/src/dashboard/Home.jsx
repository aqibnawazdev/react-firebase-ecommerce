import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { IoBagAdd } from "react-icons/io5";

import DashboardCard from "./DashboardCard";

function Home() {
  return (
    <div className="w-full mt-2 flex justify-start flex-wrap content-start md:justify-around sm:justify-evenly items-start gap-2">
      <DashboardCard
        title={"Today's Sale"}
        stats={"553K"}
        analytics={"+55%"}
        icon={<FaFileInvoiceDollar size={30} />}
      />
      <DashboardCard
        title={"Today's Users"}
        stats={"2,300"}
        analytics={"+3%"}
        icon={<HiUsers size={30} />}
      />
      <DashboardCard
        title={"Total Sales"}
        stats={"103,430"}
        analytics={"+5%"}
        icon={<SiGoogleanalytics size={30} />}
      />
      <DashboardCard
        title={"Active Orders"}
        stats={"31"}
        analytics={"+2%"}
        icon={<IoBagAdd size={30} />}
      />
    </div>
  );
}

export default Home;
