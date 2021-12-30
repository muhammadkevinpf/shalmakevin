import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Pagination,
  Modal,
} from 'react-bootstrap';
import { APIService } from '../config/APIService';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import { thanks } from '../assets';

function GuestBook() {
  const [userComments, setUserComments] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [textData, setTextData] = useState({ name: '', message: '' });
  const [isShow, setIsShow] = useState(false);
  const [timerText, setTimerText] = useState('');
  const today = new Date();

  const { getUserComments, addUserComments } = APIService();
  useEffect(() => {
    setLoading(true);
    setError(false);
    getUserComments(currentPage.toString())
      .then((response) => {
        setUserComments(response.result.res.docs);
        setTotalPage(response.result.res.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [currentPage]);

  const getDaysDiff = (from) => {
    return moment(from).from(today);
  };

  const renderPagination = () => {
    let paginationArr = [];
    if (totalPage > 0) {
      for (let i = 0; i < totalPage; i++) {
        // console.log(i);
        paginationArr.push(
          <Pagination.Item
            active={currentPage === i + 1 ? true : false}
            onClick={() => onPaginationClick(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
    }
    return paginationArr;
  };

  const onPaginationClick = (val) => {
    setCurrentPage(val);
  };

  const onNextClick = () => setCurrentPage((prevState) => prevState + 1);

  const onPrevClick = () => setCurrentPage((prevState) => prevState - 1);

  const onNameChange = (val) =>
    setTextData((prevState) => ({ ...prevState, name: val }));

  const onMessageChange = (val) => {
    setTextData((prevState) => ({ ...prevState, message: val }));
  };

  const resetTextData = () => setTextData({ name: '', message: '' });

  const onFormSubmitted = (e) => {
    addUserComments(textData.name, textData.message).then((res) => {
      let newTextData = { ...textData, createdDate: today };
      if (userComments.length === 5) {
        setUserComments((prevState) => [newTextData, ...prevState].slice(0, 5));
      } else {
        setUserComments((prevState) => [newTextData, ...prevState]);
      }
      setModalOpen();
      resetTextData();
    });
    e.preventDefault();
  };

  const setModalOpen = () => {
    let timeLeft = 3;
    setIsShow(true);
    let timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        setTimerText('');
        setIsShow(false);
      } else {
        setTimerText(`closing in ${timeLeft} seconds`);
      }
      timeLeft -= 1;
    }, 1000);
  };

  const renderSkeleton = () => {
    let arrSkeleton = [];
    for (let i = 0; i < 2; i++) {
      arrSkeleton.push(
        <div className={i === 2 ? '' : 'mb-3'} key={i}>
          <Skeleton width={200} height={20} />
          <Skeleton height={100} />
          <Skeleton width={120} height={20} />
        </div>
      );
    }
    return arrSkeleton;
  };

  return (
    <Container className="font-playfair mt-5 py-5 form-container" fluid>
      <div className="modal-form">
        <h2 className="text-center mb-4">Say Your Prayers!</h2>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Form onSubmit={onFormSubmitted}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  value={textData.name}
                  onChange={(e) => onNameChange(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                  value={textData.message}
                  onChange={(e) => onMessageChange(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="secondary" type="submit" className="w-100">
                Send
              </Button>
            </Form>
          </Col>
          <Col
            xs={12}
            className="mt-4 p-3 rounded mx-3"
            style={{ background: 'white', height: '400px' }}
          >
            <div style={{ height: '350px', overflowY: 'auto' }}>
              {loading
                ? renderSkeleton()
                : userComments.map((item, i, { length }) => (
                    <div
                      className={length - 1 !== i ? 'mb-3' : ''}
                      key={item._id}
                    >
                      <p className="fw-bold text-black mb-1">{item.name}</p>
                      <p className="text-black mb-0 lh-sm">{item.message}</p>
                      <small className="text-muted">
                        {getDaysDiff(item.createdDate)}
                      </small>
                    </div>
                  ))}
            </div>
          </Col>
          <Col xs={12}>
            <Pagination className="justify-content-center mt-3">
              <Pagination.Prev
                disabled={currentPage === 1 ? true : false}
                onClick={() => onPrevClick()}
              />
              {renderPagination()}
              <Pagination.Next
                disabled={currentPage === totalPage ? true : false}
                onClick={() => onNextClick()}
              />
            </Pagination>
          </Col>
        </Row>
      </div>
      <Modal show={isShow} centered>
        <Modal.Body className="d-flex flex-column align-items-center py-5">
          <img src={thanks} alt="Thank You" className="w-75" />
          <p className="mt-4 font-playfair fw-bold">
            Thank you for your wishes and blessings!
          </p>
          <small>{timerText}</small>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default GuestBook;
