import React from 'react';
import useAuth from '../../hooks/useAuth';

const Result = () => {
    const { handleSubmit,answeredQuiz } = useAuth();
    console.log(answeredQuiz);

    const answeds= (oji) =>{
        console.log(oji);
    }
    return (
        <div>
            <h1>All the questions and results are shown here along with your scores...</h1>
            <div className='table-responsive'>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Type</th>
                <th scope="col">Question</th>
                <th scope="col">Answers</th>
                <th scope="col">Correct Answers</th>
                </tr>
            </thead>
            {
                answeredQuiz.map((answered)=> (
                    
                    <tbody>
                        <tr>
                            <th scope="row">{answered.id}</th>
                            <td>{answered.type}</td>
                            <td>{answered.question}</td>
                            <td>{answered.answers.answer}</td>
                            {/* <button onClick={()=>{answeds(answered)}}>dd</button> */}
                            <td>{answered.correct_answer}</td>
                        </tr>
                    </tbody>
                ))
            }
            
            </table>
        </div>
        </div>
    );
};

export default Result;