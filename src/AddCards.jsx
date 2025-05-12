import './addCard.css';

export default function AddCard() {
    return(
        <>
            <form>
                <button className='add-button' type="submit">Add</button>
                <div>
                    <label>Term:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Definition:</label>
                    <input type="text"/>
                </div>
                <input type="file"/>

            </form>
        </>
    )
}