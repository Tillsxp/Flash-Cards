import react from 'react';
import React, { useEffect, useState } from "react";
import cong from "./Configuration";
import { getDatabase, ref, onValue } from "firebase/database";

export default function ListCards() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        
        const database = getDatabase(cong);

        const collectionRef = ref(database, "your_collection");

            const fetchData = () => {
            onValue(collectionRef, (snapshot) => {
            const dataItem = snapshot.val();


            if (dataItem) {

                const displayItem = Object.values(dataItem);
                setData(displayItem);
      }
    });
  };


  fetchData();
}, []);

return (
  <div>
    <h1>Data from database:</h1>
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
}