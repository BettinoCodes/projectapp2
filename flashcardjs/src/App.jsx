import { useState } from 'react';
import Flashcard from './flashcards.jsx';
import './app.css';


const FlashcardApp = () => {
  const flashcards = [
    { question: "What is an Algorithm?", answer: "A step-by-step procedure for solving a problem or accomplishing a task." },
    { question: "What is Big O Notation?", answer: "A way to describe the time complexity of an algorithm, focusing on its growth rate." },
    { question: "What is a Data Structure?", answer: "A way of organizing and storing data for efficient access and modification." },
    { question: "What is a Stack?", answer: "A linear data structure following the LIFO (Last In, First Out) principle." },
    { question: "What is a Queue?", answer: "A linear data structure following the FIFO (First In, First Out) principle." },
    { question: "What is Recursion?", answer: "A function that calls itself to solve smaller instances of a problem." },
    { question: "What is a Linked List?", answer: "A data structure consisting of nodes where each node points to the next one." },
    { question: "What is a Binary Search Tree?", answer: "A tree data structure in which each node has at most two children, and the left child is less than the root while the right is greater." },
    { question: "What is a Hash Table?", answer: "A data structure that maps keys to values using a hash function for fast lookups." },
    { question: "What is a Graph?", answer: "A collection of nodes (vertices) and edges (connections) representing relationships between entities." },
    { question: "What is Polymorphism?", answer: "An object-oriented programming concept where objects can take on many forms, allowing a single interface to represent different data types." },
    { question: "What is Encapsulation?", answer: "An object-oriented concept where data and methods are bundled together and access is restricted to avoid interference and misuse." },
    { question: "What is Inheritance?", answer: "A mechanism in OOP where one class can inherit properties and methods from another class." },
    { question: "What is a Database?", answer: "An organized collection of data, generally stored and accessed electronically via a computer system." },
    { question: "What is normalization in Databases?", answer: "The process of organizing data to reduce redundancy and improve data integrity." },
    { question: "What is an Operating System?", answer: "System software that manages hardware resources and provides common services for computer programs." },
    { question: "What is a Thread?", answer: "The smallest unit of a process that can be scheduled by the operating system for execution." },
    { question: "What is a Deadlock?", answer: "A situation in concurrent computing where two or more processes are unable to proceed because each is waiting for the other to release resources." },
    { question: "What is a Compiler?", answer: "A program that translates high-level source code into machine code that a computer's processor can execute." },
    { question: "What is the Difference Between TCP and UDP?", answer: "TCP is connection-oriented and reliable, while UDP is connectionless and faster but less reliable." }
  ];
  

  const [currentCard, setCurrentCard] = useState(flashcards[0]);

  const selectRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(flashcards[randomIndex]);
  };

  return (
    <div>
      <div className='content'>
      <Flashcard question={currentCard.question} answer={currentCard.answer} />
      <button onClick={selectRandomCard}>Next Card</button>
      </div>
    </div>
  );
};

export default FlashcardApp;
