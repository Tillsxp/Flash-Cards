import React, { useEffect, useState } from "react";
import cong from "./Configuration";
import { ref, onValue } from "firebase/database";
import './listCards.css';
import Slider from 'react-slick';

export default function ListCards() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll:1,
    };
{/* Seperate Data into different component */}
    const [data, setData] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(() => {
        
        const collectionRef = ref(cong, "flash_cards");

        const fetchData = () => {
            onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();  
            console.log(dataItem);
            if (dataItem) {
                const entires = Object.entries(dataItem);
                setData(entires);
            }
    });
  };

  fetchData();
}, []);

const toggleFlip = (term) => {
  setFlippedCards((prevState) => ({
    ...prevState,
    [term]: !prevState[term],
  }));
};
console.log(data);
return (
  <div>
      <Slider {...settings}>
      {data.map(([key, value]) => (
        <div key={key}>
          <h1>Flash Cards</h1>
            <div 
              className={`card ${flippedCards[value.Term] ? "flipped" : ""}`} 
              onClick={() => toggleFlip(value.Term)} >
              <div className="outter-box">
                <div className="front">
                  <h4>{value.Term}</h4>
                </div>
                <div className="back">
                <div className="inner-box">
                    <p>{value.Definition}</p>
                  {value.Photo && value.Photo.trim() !== "" && (
                    <img src={`/assets/${value.Photo}`} alt={value.Term || "Image"}/>
                  )}
                </div>
                </div>
              </div>
                  </div>
                  </div>
        ))}
      </Slider>
  </div>
);
}