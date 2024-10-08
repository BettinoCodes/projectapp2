import React from "react";
import './flashcards.css';

function Flashcard(props) {
  
  const handleCardClick = () => {
    props.setIsFlipped(!props.isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleCardClick}>
      <div className={`flashcard ${props.isFlipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <h2>{props.question}</h2>
        </div>
        <div className="flashcard-back">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
