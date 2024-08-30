import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomePageCards from "../../components/HomePage Cards/HomePageCards";
import About from "../../components/About/About";
import Carousel from "../../components/Carousel/Carousel";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (this could be a token or some state check)
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard"); // Redirect to dashboard if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-lg">
        <Link to="/">
          <h2 className="text-xl font-medium text-black py-2">N<span className="text-red-500">o</span>te!</h2>
        </Link>

        <SearchBar  />

        <button
          className="border bg-blue-600 rounded-2xl outline text-white px-6 py-1 hover:bg-blue-800"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
      {/* NavBar ends here */}

      <HeroSection />
      <HomePageCards />
      <About />
      <Carousel />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default HomePage;
