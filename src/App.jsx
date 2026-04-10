import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceForm from "./components/ServiceForm";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {

  const PHONE = import.meta.env.VITE_PHONE;
  const WHATSAPP = import.meta.env.VITE_WHATSAPP;

  const call_conversion = (url) => {
    window.location.href = url;
  };

  const whatsapp_conversion = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    const GTAG = import.meta.env.VITE_GTAG;

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GTAG);
  }, []);

  return (
    <>
      <Header PHONE={PHONE} call_conversion={call_conversion} />
      <Hero PHONE={PHONE} WHATSAPP={WHATSAPP} call_conversion={call_conversion} whatsapp_conversion={whatsapp_conversion}/>
      <ServiceForm WHATSAPP={WHATSAPP} />
      <Services />
      <WhyUs />
      <Reviews />
      <CTA PHONE={PHONE} call_conversion={call_conversion} />
      <Footer />
    </>
  );
}

export default App;