import Navbar from "../../Component/Navbar";
import Hero from "../../Component/Hero";

function Dashboard() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="flex-grow overflow-auto">
        <Hero />
      </div>
    </div>
  );
}

export default Dashboard;
