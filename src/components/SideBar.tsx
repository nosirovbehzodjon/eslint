function SideBar() {
  return (
    <div id="sidebar" className="w-fit drop-shadow-2xl">
      <div className="fixed z-0 h-screen overflow-y-auto pt-24 pb-24">
        <div className="bg-gray-50">
          <ul>
            <li>Dashboard</li>
            <li>Inbox</li>
            <li>Users</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
