import React from 'react';
import useAuth from '../../hooks/useAuth';

const Result = () => {
    const { answeredQuiz,currentQuestion } = useAuth();
    console.log(answeredQuiz);
    
    const handleSubmit = (answeredQuiz1) => {
        const allAnswers = answeredQuiz1.map((answer) => answer.correct_answer);
        console.log(allAnswers);
        return (
            <>{allAnswers}</>
        )
      };

    
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
                    
                    <tbody key={answered.id}>
                        <tr>
                            <th scope="row">{answered.id}</th>
                            <td>{answered.type}</td>
                            <td>{answered.question}</td>
                            {/* <td>{answered.a}

                            </td> */}
                            
                            <td>{answered.correct_answer}</td>
                            <td>{answered.answers.length}</td>
                            {/* <td>{handleSubmit(answered.answers)}

                            </td> */}
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