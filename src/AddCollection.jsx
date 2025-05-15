import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {set, ref} from 'firebase/database';
import cong from './Configuration';

export default function AddCollection(){
    const [collectionName, setCollectionName] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await set(ref(cong, `flash_cards/Collection/${collectionName}`), {});

        navigate(`/collection/${collectionName}`);
    };

    return(
        <form onSubmit={handleSubmit}>

            <input 
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
                placeholder='Collection Name'
            />

            <button type='submit'>Create</button>
        </form>
    )
}