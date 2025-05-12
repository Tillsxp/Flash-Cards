import './addCard.css';
import { useNavigate } from 'react-router-dom';

export default function AddCards() {

    const navigate = useNavigate();

    const handleAdd = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
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