import './addCard.css';
import { useNavigate } from 'react-router-dom';
import cong from "./Configuration";
import { ref ,push , set } from "firebase/database";

export default function AddCards() {

    const navigate = useNavigate();

    function writeFlashCards(term, definition){
        const cardRef = push(ref(cong, 'flash_cards/'));
        set(cardRef, {
            Term: term,
            Definition: definition,
        });
    }

    const handleAdd = (e) =>{
        e.preventDefault();

        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        writeFlashCards(data.term, data.definition);
        
        console.log(data);
        navigate("/ListCards");
    }

    return(
        <>
            <form onSubmit={handleAdd}>
                <div>
                    <label>Term:</label>
                    <input type="text" name='term'/>
                </div>
                <div>
                    <label>Definition:</label>
                    <input type="text" name='definition' />
                </div>
                <input type="file"/>
                <input type='submit' value="add"/>

            </form>
        </>
    )
}