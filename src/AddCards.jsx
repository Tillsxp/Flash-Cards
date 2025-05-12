import './addCard.css';

export default function AddCard() {


    const handleAdd = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
       
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