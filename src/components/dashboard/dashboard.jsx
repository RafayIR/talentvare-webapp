import Sidebar from "./Sidebar";
import DashboardMain from "./dashboardMain";
const Dashboard = () => {

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F4F4F4] pt-10">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-8 md:gap-6 gap-0">
            <Sidebar />
            <DashboardMain />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;