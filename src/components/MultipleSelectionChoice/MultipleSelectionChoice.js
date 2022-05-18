import React, { useState } from "react";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";
import { FaCheck } from 'react-icons/fa';
import styles from './MultipleSelectionChoice.css';


const MultipleSelectionChoice = (props) => {
  const { question, answers } = props.quiz;
  const { answeredQuiz, currentQuestion } = useAuth();
  //state for multiple selection
  const [selectedCategories, setSelectedCategories] = useState([]);

  //
  const handleAnswer = (e) => {
    const updateCategory = selectedCategories.map((category) => category.value);
    // updating the answer for the current quiz
    answeredQuiz[currentQuestion].correct_answer = updateCategory;
  };

  //   handeling the changes for multiple choices
  const handleChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const handleAnswersubmit = (e) => {
        
    // setCurrentQuestion(currentQuestion + 1);
};
  return (
    <div>
      <h4 className="text-primary mb-3">{question}</h4>

      {/* <Select
        onBlur={handleAnswer}
        isMulti
        hideSelectedOptions={true}
        menuPosition="absolute"
        minMenuHeight={50}
        maxMenuHeight={80}
        value={selectedCategories}
        name="categories"
        onChange={handleChange}
        options={answers}
        className="mb-2  rounded border-2 mt-1"
      /> */}
      {
        answers.map((ans, index) =>(
            <div key={ans.label} className='my-2 CustombuttonMultiple d-flex bg-light justify-content-start align-items-center border border-1 rounded' style={{}}>
               <button onClick={handleAnswersubmit} className='okDrawNew rounded border-1 fs-4'> 
                <span className="border border-1 fs-5 px-2 fw-bold">{String.fromCharCode(65 + index)}</span>
                <span htmlFor="checkboxNoLabel" className="ms-2">{ans.value}</span>
                <span className="ms-2">
                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                </span>
               </button> 
               </div>
        )
      )}
      <div  className='mt-5 Custombutton d-flex flex-row justify-content-start align-items-center border border-dark rounded'>
               <button onClick={handleAnswersubmit} className='okDraw rounded border-1 fs-4 fw-bold text-light'>Ok <FaCheck/></button> 
               <h6 className='p-2'>press <strong>ENTER</strong></h6>
           </div>
    </div>
  );
};

export default MultipleSelectionChoice;
