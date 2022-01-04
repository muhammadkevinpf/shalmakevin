import React, { useState } from 'react';
import { Container, Form, Button, Image, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
import { APIService } from '../config/APIService';
import {
  generous_person,
  super_generous,
  misterious_person,
  our_hero,
} from '../assets/';

function Payment() {
  const [amount, setAmount] = useState('');
  const { getPaymentLink } = APIService();

  const arrCharacter = [
    {
      image: generous_person,
      title: 'Generous Person',
      amount: 'Rp. 100.000',
      value: 100000,
    },
    {
      image: super_generous,
      title: 'Super Generous Person',
      amount: 'Rp. 250.000',
      value: 250000,
    },
    {
      image: our_hero,
      title: 'Our Hero',
      amount: 'Rp. 1.000.000',
      value: 100000,
    },
  ];

  const onButtonClicked = (name, value) => {
    if (!value) {
      toast.error('Please insert amount first');
      return;
    }

    if (value < 5000) {
      toast.error('Your amount is below minimum. Please insert min Rp. 5.000');
      return;
    }

    getPaymentLink(name, value).then((res) => {
        window.open(res.redirect_url, '_blank')
    });
  };

  return (
    <Container fluid>
      <div className="d-flex flex-column align-items-center p-4">
        <h3 className="font-playfair text-center fw-bold">Wedding Gift</h3>
        <p className="font-playfair text-center payment-desc">
          Your prayers, blessings, love & support towards every path we step on
          are the greatest gift we could ever ask for. Nevertheless, we would be
          honored to receive any gift and have provided the means to make it
          easier for you. Thank you.
        </p>
        <Row className="gx-5">
          {arrCharacter.map((item, index) => (
            <Col
              className="text-center mb-4 mb-md-0 payment-box me-2"
              key={index}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="payment-image mb-2"
              />
              <p className="mb-1 fw-bold font-playfair payment-title">
                {item.title}
              </p>
              <p className="font-readex text-muted payment-amount">
                {item.amount}
              </p>
              <Button
                variant="outline-secondary"
                onClick={() => onButtonClicked(item.title, item.value)}
              >
                Choose
              </Button>
            </Col>
          ))}
          <Col className="text-center mb-4 mb-md-0 payment-box">
            <Image
              src={misterious_person}
              alt="Misterious Person"
              className="payment-image mb-2"
            />
            <p className="mb-1 fw-bold font-playfair">
              Misterious Generous Person
            </p>
            <Form.Group className="d-flex justify-content-center">
              <CurrencyInput
                placeholder="Amount"
                className="mb-3 payment-text w-75 text-center"
                value={amount}
                intlConfig={{ locale: 'id-ID', currency: 'IDR' }}
                onValueChange={(value) => setAmount(value)}
              ></CurrencyInput>
            </Form.Group>
            <Button
              variant="outline-secondary"
              onClick={() =>
                onButtonClicked('Misterious Generous Person', amount)
              }
            >
              Choose
            </Button>
          </Col>
        </Row>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </Container>
  );
}

export default Payment;
