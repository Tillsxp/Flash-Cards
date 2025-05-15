import {useParams, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import cong from "./Configuration";
import { ref, onValue } from "firebase/database";
import './listCards.css';
import Slider from 'react-slick';

export default function CollectionView() {

    const {id} = useParams()
    const [data, setData] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});



    var settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll:1,
    };
{/* Seperate Data into different component */}

    useEffect(() => {
        
        const collectionRef = ref(cong, `flash_cards/Collection/${id}`);

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
}, [id]);

const toggleFlip = (term) => {
  setFlippedCards((prevState) => ({
    ...prevState,
    [term]: !prevState[term],
  }));
};
console.log(data);
return (
  <div>
    <h1>{id} - Flash Cards</h1>
    <Link to={`/collection/${id}/AddCards`}>
      <button> Add Card</button>
    </Link>
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