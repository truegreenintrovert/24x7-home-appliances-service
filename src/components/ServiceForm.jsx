function ServiceForm({ WHATSAPP }) {

  const sendToWhatsApp = () => {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;
    let service = document.getElementById("service").value;
    let period = document.getElementById("period").value;

    let message = `New Service Request:
Name: ${name}
Phone: ${phone}
City: ${city}
Pincode: ${pincode}
Service: ${service}
Period: ${period}`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">
          Send Us a Message
        </h3>

        <div className="space-y-4">

          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            id="phone"
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg"
          />

          <input
            id="city"
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg"
          />

          <input
            id="pincode"
            type="text"
            placeholder="Area Pincode"
            className="w-full p-3 border rounded-lg"
          />

          <select
            id="service"
            className="w-full p-3 border rounded-lg"
          >
            <option>Choose Service</option>
            <option>Air Conditioner Services</option>
            <option>Refrigerator Services</option>
            <option>Microwave Services</option>
            <option>Washing Machine Services</option>
            <option>Other</option>
          </select>

          <select
            id="period"
            className="w-full p-3 border rounded-lg"
          >
            <option>Product Period</option>
            <option>Out of Warranty</option>
            <option>Extended Warranty</option>
            <option>AMC</option>
          </select>

          <button
            onClick={sendToWhatsApp}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
          >
            Submit
          </button>

        </div>
      </div>
    </section>
  );
}

export default ServiceForm;