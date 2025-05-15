import {useParams, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import cong from "./Configuration";
import { ref, onValue, off } from "firebase/database";
import './listCards.css';
import Slider from 'react-slick';

export default function CollectionView() {

    const {id} = useParams()
    const [data, setData] = useState([]);
    const [flippedCards, setFlippedCards] = useState({});



    var settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll:1,
    };

    useEffect(() => {
        
        const collectionRef = ref(cong, `flash_cards/Collection/${id}`);

        const unsubscribe = onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();  
            if (dataItem) {
                const entries = Object.entries(dataItem);
                setData(entries);
            }else {
              setData([]);
            }
    });

    return () => {
      off(collectionRef, 'value', unsubscribe);
    };

}, [id]);

const toggleFlip = (term) => {
  setFlippedCards((prevState) => ({
    ...prevState,
    [term]: !prevState[term],
  }));
};
return (
  <div>
    <h1>{id} - Flash Cards</h1>
    <Link to={`/collection/${id}/AddCards`}>
      <button> Add Card</button>
    </Link>
        <h1>Flash Cards</h1>
      <Slider {...settings}>
      {data.map(([key, value]) => (
        <div key={key}>
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