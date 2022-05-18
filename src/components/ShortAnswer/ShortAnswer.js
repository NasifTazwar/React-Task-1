import React from 'react';
import useAuth from '../../hooks/useAuth';
import styles from "./ShortAnswer.css";
import { FaCheck } from 'react-icons/fa';

const ShortAnswer = (props) => {
    const {question}= props.quiz;
    const { answeredQuiz,setCurrentQuestion, setAnsweredQuiz,currentQuestion} = useAuth();
    
    const handleAnswer=(e)=>{
        const inputData = e.target.value;
        console.log(e);
        if(inputData.length !== 0){

            answeredQuiz[currentQuestion].correct_answer= e.target.value;
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    const handleKeyPress =(e) =>{
        const inputData = e.target.value;
        console.log(e);
        if(e.keyCode === 13 && inputData.length !== 0){
            answeredQuiz[currentQuestion].correct_answer= e.target.value;
            setCurrentQuestion(currentQuestion + 1);
            console.log("asd");
            }
    }
    const handleAnswersubmit = (e) => {
        
        setCurrentQuestion(currentQuestion + 1);
    }
    return (
        <div className=''>
           <h4 className='questionText' ><strong className='questionTextBold'>{question.split(' ')[0]}</strong>{question.slice(3)}</h4>

           <input placeholder='short answer' onKeyDown={handleKeyPress} onClick={handleAnswer} className='inputField' required type="text" />
           
           <div  className='Custombutton d-flex flex-row justify-content-start align-items-center border border-dark rounded'>
               <button onClick={handleAnswersubmit} className='okDraw rounded border-1 fs-4 fw-bold'>Ok <FaCheck/></button> 
               <h6 className='p-2'>press <strong>ENTER</strong></h6>
           </div>
        </div>
    );
};

export default ShortAnswer;