import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Butn, QField, Containerr, Butn1, BtnHolder } from './css';
import axios from 'axios';
import Pagination from './pagination';
import Modal from './Modal/modal';

const RatingStars = ({ rating, onRate }) => {
  const totalStars = 5;

  const handleStarClick = (selectedRating) => {
    onRate(selectedRating);
  };

  return (
    <div>
      {Array.from({ length: totalStars }).map((_, index) => (
        <span
          key={index}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          onClick={() => handleStarClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const QuoteItem = ({ quote }) => {
  const [rating, setRating] = useState(quote.rating);

  const handleRateQuote = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <QField key={quote.id}>
      <h4>{quote.author}</h4>
      <p>{quote.text}</p>
      <RatingStars rating={rating} onRate={handleRateQuote} />
    </QField>
  );
};

const Quotes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posPerpag, setPosPerPag] = useState(3);
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');

  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((response) => {
      const quotesWithRating = response.data.map((quote) => ({
        ...quote,
        rating: 0,
      }));
      setData(quotesWithRating);
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const addQuote = (newQuote) => {
    if (newQuote.trim() !== "") {
      const updatedData = [ { id: data.length + 1, text: newQuote, rating: 0 },...data];
      setData(updatedData);
      toggleModal(); 
    }
  };

  const lastPostIndex = currentPage * posPerpag;
  const firstPostIndex = lastPostIndex - posPerpag;
  const currentData = data.slice(firstPostIndex, lastPostIndex);

  return (
    <Containerr>
      <h1>QUOTES</h1>
      <BtnHolder>
        <NavLink to={'/'} className="active">
          <Butn>LOGOUT</Butn>
        </NavLink>
        <Butn1 onClick={toggleModal}>ADD QUOTE</Butn1>
      </BtnHolder>

      {currentData.map((el) => {
  console.log('Rendering QuoteItem:', el); // Add this line
  return <QuoteItem key={el.id} quote={el} />;
      })}

  <Modal isOpen={isModalOpen} closeModal={toggleModal} addQuote={addQuote} modalInputValue={modalInputValue} setModalInputValue={setModalInputValue} ></Modal>
      <Pagination totalPost={data.length} postPerpag={posPerpag} onPageChange={handlePageChange} setCurrentPage={setCurrentPage} />
    </Containerr>
  );
};

export default Quotes;
