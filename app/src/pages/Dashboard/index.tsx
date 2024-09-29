import Navbar from "../../Component/Navbar";
import Hero from "../../Component/Hero";

function Dashboard() {

return(
    <div className="bg-gray-900 h-screen w-full">
        <div>
            <Navbar />
        </div>

        <div>
            <Hero />
        </div>
    </div>
);
}

export default Dashboard;