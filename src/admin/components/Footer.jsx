const Footer = () => {
  return (
    <footer className="purple-footer">
      <div>
        © {new Date().getFullYear()} VegeFoods Admin Panel
      </div>

      <div>
        Designed with React + Vite
      </div>
    </footer>
  );
};

export default Footer;