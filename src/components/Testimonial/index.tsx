import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../Utility/TestimonialCard";

export default function Testimonial(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // mobile screen breakpoint
        settings: {
          slidesToShow: 1,
          slideToScroll:1
        },
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-primary_light text-3xl md:text-5xl font-medium px-1">
          From The People Who Use Rise{" "}
        </h1>
        <p className="text-rise_black text-lg md:text-xl text-center tracking-wide md:w-1/3">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </div>

      <div className="py-12 px-2 md:px-24 overflow-x-hidden justify-center items-center">
        <div style={{ height: "100%" }}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((_, n) => (
              <TestimonialCard key={n} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
