import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 bg-gray-200 p-2 rounded">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <hr className="my-4" />
      <Outlet /> {/* Child routes will render here */}
    </div>
  );
}