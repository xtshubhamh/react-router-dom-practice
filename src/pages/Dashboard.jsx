import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-lg font-semibold">📊 Dashboard</h1>
      <Outlet /> {/* Profile or Settings will show here */}
    </div>
  );
}