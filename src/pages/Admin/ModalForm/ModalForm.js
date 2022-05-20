import React from 'react';
import { Button, Modal, P } from 'react-bootstrap';
import { createSearchParams, NavLink, useLocation, useNavigate } from 'react-router-dom';

const ModalForm = (props) => {
    const {questions} = props;
    const navigate = useNavigate();

    const goToQuiz = () =>
    navigate({
      pathname: '/',
      search: `?quiz=${createSearchParams(questions)}`,
    });

    const location = useLocation();
    console.log(location);
    
    return (
        <Modal
      {...props}
      size="xl"
      fullscreen="true | 'sm-down'"
      dialogClassName="modal-100w"

      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Encoded Link
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Button onClick={goToQuiz}>Quiz</Button>
        <p>http://localhost:3000/?quiz={location.search}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default ModalForm;