// src/pages/Landing.jsx
import Header from "../components/header/Header";
import Careers from "../components/careers/Careers";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <Header /> {/* El Navbar ya está dentro de Header */}

      <main>
        {/* Contenido principal de la página */}
      </main>

      <Careers />
      <Events />
      <Footer />
    </>
  );
};

export default Landing;
