function Header({ PHONE, call_conversion }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">
          24x7 Home Appliances Service
        </h1>

        <div className="space-x-4 hidden md:block">
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={() => call_conversion(`tel:${PHONE}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Call Now
        </button>
      </div>
    </header>
  );
}

export default Header;