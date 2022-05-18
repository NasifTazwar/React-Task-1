import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./MultipleChoice.module.css";
const MultipleChoice = (props) => {
  const { question, answers } = props.quiz;
  const { handleSimpleInput } = useAuth();

  
  return (
    <div>
      <div className={styles.MultipleChoice}>
        <div className="py-2 h5">
          <b>{question}</b>
        </div>
        <select onChange={handleSimpleInput} multiple className={styles.select}>
          
          {answers.map((ans, index) => (
            
            <option
              className="d-block mx-2 p-3 border-2 rounded border my-3 bg-light"
              value={ans.answer}
              // label={ans.answer}
              key={ans.id}
            >{String.fromCharCode(65 + index)}. {ans.answer}
            </option>
            
          ))}
          
        </select>

        {/* <ol type="A" class="list-group">

          
        </ol> */}
      </div>
    </div>
  );
};

export default MultipleChoice;
