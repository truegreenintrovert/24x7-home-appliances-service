function Hero({ PHONE, WHATSAPP, call_conversion, whatsapp_conversion }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Appliance Repair in Bilaspur
        </h2>

        <p className="text-lg mb-6">
          AC • Fridge • Washing Machine • MicroWave Repair at Your Doorstep
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => call_conversion(`tel:${PHONE}`)}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg"
          >
            Call Now
          </button>

          <button
            onClick={() =>
              whatsapp_conversion(`https://wa.me/${WHATSAPP}?text=Hello`)
            }
            className="bg-green-500 px-6 py-3 rounded-lg"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;