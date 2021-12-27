import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Modals() {
  const [show, setShow] = useState(true);
  return (
    <Modal show={show} fullscreen={true}>
      <Modal.Body className="d-flex text-center justify-content-center flex-column align-items-center modal-body">
        <div className="modal-box">
          <h3 className="font-playfair mb-4">THE WEDDING</h3>
          <h1 className="font-dancing mb-4" style={{ fontSize: '4em' }}>
            Shalma <br />
            &amp;
            <br /> Kevin
          </h1>
          <h3 className="font-playfair mb-5">20 February 2022</h3>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            className="font-playfair"
            style={{ letterSpacing: '1px' }}
          >
            Open Invitation
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Modals;
