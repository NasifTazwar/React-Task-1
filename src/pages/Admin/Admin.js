import React, { useEffect, useState } from 'react';
import ModalForm from './ModalForm/ModalForm';
import { quiz } from '../../main';
import { useSearchParams } from 'react-router-dom';

const Admin = () => {
    const [modalShow, setModalShow] = useState(false);

    const [questions, setQuestions] = useState({});

    let [searchParams, setSearchParams] = useSearchParams()


    
    const questionslist = () =>{
        let parsedJs2= [];
        quiz.forEach(element =>{
            
            parsedJs2.push(element.question);
        }
        
        )
        // console.log(parsedJs2);
        const stringifiedJson = JSON.stringify(parsedJs2);
        setQuestions(stringifiedJson) ;
        const encodedStringBase64= toEncodeStringsFunction(stringifiedJson);
        setSearchParams(encodedStringBase64);
        setModalShow(true);
    }
    console.log(questions);
    console.log(searchParams);

    /* const toEncodeStrings = questions;
    const encodedString = window.btoa(toEncodeStrings);
    console.log(encodedString); */

    const toEncodeStringsFunction = (string) =>{
        const encodedString = window.btoa(string);
        return encodedString;
        // console.log(encodedString);
    }









    return (
        
        <div className='container-fluid'>
                <header className='d-flex justify-content-between p-5'>
                    <h1>digg</h1>
                    <div>
                        <button data-toggle="modal" data-target="#modalContactForm" onClick={questionslist}>Save & Share</button>
                    </div>
                </header>

                <hr />

                <main className='row vh-100'>
                    <div className='col-4 border-end d-flex flex-column align-items-center'>
                        <h4>Questions</h4>
                        <button className='px-5 py-1 w-100'>+</button>
                    </div>
                    <ModalForm questions= {questions} show={modalShow} onHide={()=> setModalShow(false)}></ModalForm>
                    <div className='col-8'></div>
                </main>
        </div>
            
    );
};

export default Admin;