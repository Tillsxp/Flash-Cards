import react from 'react';
import React, { useEffect, useState } from "react";
import cong from "./Configuration";
import { getDatabase, ref, onValue } from "firebase/database";

export default function ListCards() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        
        const database = getDatabase(cong);

        const collectionRef = ref(database, "flash_cards");

            const fetchData = () => {
            onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();
            console.log("Fetched Data:", dataItem);

            if (dataItem) {
                setData([dataItem]);
      }
    });
  };

  fetchData();
}, []);

return (
  <div>
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <h4>{item.Term}</h4>
          <p>{item.Definition}</p>
           {item.Photo && item.Photo.trim() !== "" && (
            <img src={item.Photo} alt={item.Term || "Image"}/>
           )}
        </li>
      ))}
    </ul>
  </div>
);
}