import  { useEffect, useRef } from 'react';
import ibmwebImg from "../../assets/images/ibmwebsphere.png";
import microsoftImg from "../../assets/images/microsoft.png";
import liverpoolImg from "../../assets/images/liverpool.png";
import outlookImg from "../../assets/images/outlook.png";
import bajajImg from "../../assets/images/bajaj.png";
import yokohamaImg from "../../assets/images/yokohama.png";
import barcelImg from "../../assets/images/barcel.png";
import disneyImg from "../../assets/images/disney.png";
import googleImg from "../../assets/images/google.png";

const Carousel = () => {
  const images = [
    ibmwebImg, microsoftImg, liverpoolImg, outlookImg,
    bajajImg, yokohamaImg, barcelImg, disneyImg, googleImg
  ];

  // Duplicate the images array multiple times
  const duplicatedImages = Array(30).fill(images).flat();

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleScroll = () => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
    };

    track.addEventListener('scroll', handleScroll);

    return () => {
      track.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="text-center mt-32 mb-32">
      <h1 className='font-bold text-3xl mt-10 mb-14'>Meet Our Users and Partners</h1>
      <div className="carousel-container mx-auto overflow-hidden">
        <div
          ref={trackRef}
          className="carousel-track flex"
          style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
        >
          {duplicatedImages.map((img, index) => (
            <div className="carousel-item inline-block flex-shrink-0 mx-2" key={index}>
              <img src={img} alt={`image ${index + 1}`} className="h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
