import './flashcards.css'; 

function Flashcard (props){
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-front">
          <h2>{props.question}</h2>
        </div>
        <div className="flashcard-back">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
