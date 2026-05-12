const Navbar = () => {
  return (
    <div className="purple-navbar">

      <div className="purple-search">

        <i className="mdi mdi-magnify"></i>

        <input
          type="text"
          placeholder="Search projects"
        />

      </div>

      <div className="purple-nav-right">

        <button className="purple-icon-btn">
          <i className="mdi mdi-email-outline"></i>
        </button>

        <button className="purple-icon-btn">
          <i className="mdi mdi-bell-outline"></i>
        </button>

        <button className="purple-icon-btn">
          <i className="mdi mdi-power"></i>
        </button>

      </div>

    </div>
  );
};

export default Navbar;