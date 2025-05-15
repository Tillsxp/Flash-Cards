import {useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {ref, onValue} from 'firebase/database';
import cong from './Configuration';

export default function ListCollection(){

    const {id} = useParams();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const collectionRef = ref(cong,`flash_cards/Collection/${id}`);
        onValue(collectionRef,(snapshot) => {
            const data = snapshot.val();
            if(data){
                const entires = Object.entires(data);
                setCards(entires);
            }else{
                setCards([]);
            }
        });
    }, [id]);
    return(
        <div>
            <h2>Collection : {id}</h2>
            <Link to={`/collection/${id}/AddCards`}>
                <button>Add Card</button>
            </Link>

            {cards.map(([cardId, card]) => (
                <div key={cardId}>
                    <h3>{card.Term}</h3>
                    <p>{card.Definition}</p>
                </div>
            ))}
        </div>
    );
}