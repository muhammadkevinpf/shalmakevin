import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Modals() {
  const [show, setShow] = useState(true);
  return (
    <Modal show={show} fullscreen={true}>
      <Modal.Body className="d-flex justify-content-center align-items-center modal-body">
        <Button onClick={() => setShow(false)}>BUKA GAN</Button>
      </Modal.Body>
    </Modal>
  );
}

export default Modals;
