import React from "react";
import "./life-mitmumbai.css";
import mit1 from "../../assets/mit1.jpg";
import mit2 from "../../assets/mit2.jpg";
import mit3 from "../../assets/mit3.jpg";
import mit4 from "../../assets/mit4.jpg";
import mit5 from "../../assets/mit5.jpg";

const imageData = [
  { src: mit1, quote: "Education is the manifestation of the perfection already in man", author: "Swami Vivekananda" },
  { src: mit2, quote: "The end-product of education should be a free creative man, who can battle against historical circumstances and adversities of nature.", author: "Dr. Sarvepalli Radhakrishnan" },
  { src: mit3, quote: "Education is the most important weapon for development. Educated people can bring about a change in society.", author: "Dr. A.P.J. Kalam" },
  { src: mit4, quote: "By education I mean an all-round drawing out of the best in the child and man – body, mind and spirit.", author: "Mahatma Gandhi" },
  { src: mit5, quote: "Real education enhances the dignity of a human being and increases his or her self-respect.", author: "Pranab Mukherjee" }
];

// Duplicate images to enable smooth infinite loop
const extendedImageData = [...imageData, ...imageData];

const LifeAtMITMumbai = () => {
  return (
    <div className="life-slider-container">
      <h1 className="life-heading">Life @ MIT Mumbai</h1>
      <div className="slider-wrapper">
        <div className="slider">
          {extendedImageData.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.src} alt={`MIT Campus ${index + 1}`} />
              <div className="caption">
                <strong>{item.quote}</strong>
                <br />
                <span>- {item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAtMITMumbai;
