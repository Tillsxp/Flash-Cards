import './card.css';

export default function Card (){
    return(
        <>
        <div>
            <form>
            <h4>Term</h4>
            <p>Definition</p>
            <label>Choose a photo
                <small>(optional)</small>
            </label>
            <input type='file' accept="image/png, image/jpeg"/>
            <button>+</button>
            </form>
        </div>
        </>
    )
}