import React from "react";

function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">AC Repair</h4>
            <p>Cooling issues, gas refill, installation</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Microwave Repair</h4>
            <p>Major issues covered, coil change etc</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Fridge Repair</h4>
            <p>Compressor, cooling & leakage issues</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Washing Machine</h4>
            <p>Drainage, spinning & motor problems</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;