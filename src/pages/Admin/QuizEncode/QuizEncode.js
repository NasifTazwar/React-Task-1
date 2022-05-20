import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QuizEncode = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams); 
    return (
        <div>
            
        </div>
    );
};

export default QuizEncode;