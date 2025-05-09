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

    const [data, setData] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});

    useEffect(() => {
        
        const collectionRef = ref(cong, "flash_cards");

        const fetchData = () => {
            onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();
            

            if (dataItem) {
              
                setData(Object.values(dataItem));
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

return (
  <div>
      <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
            <div 
              className={`card ${flippedCards[item.Term] ? "flipped" : ""}`} 
              onClick={() => toggleFlip(item.Term)} >
              <div className="outter-box">
                <div className="front">
                  <h4>{item.Term}</h4>
                </div>
                <div className="back">
                <div className="inner-box">
                    <p>{item.Definition}</p>
                  {item.Photo && item.Photo.trim() !== "" && (
                    <img src={`/assets/${item.Photo}`} alt={item.Term || "Image"}/>
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