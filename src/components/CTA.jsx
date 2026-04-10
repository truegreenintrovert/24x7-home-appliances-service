function CTA({ PHONE, call_conversion }) {
  return (
    <section id="contact" className="bg-blue-600 text-white text-center py-12">
      <h3 className="text-2xl font-bold mb-4">
        Book Service Within 2 Hours
      </h3>

      <button
        onClick={() => call_conversion(`tel:${PHONE}`)}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg"
      >
        Call Now
      </button>
    </section>
  );
}

export default CTA;