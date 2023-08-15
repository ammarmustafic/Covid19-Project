import React, { useState } from 'react';
import { ModalContainer, ModalContent, CloseButton, Unos, AddButton } from './css'; 
import { BtnHolder } from '../css';

const Modal = ({ isOpen, closeModal, addQuote, modalInputValue, setModalInputValue }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setModalInputValue(e.target.value); 
  };

  const handleAddQuote = () => {
    console.log('Adding quote:', modalInputValue);
    if (modalInputValue.trim() !== "") {
      addQuote(modalInputValue);
      setModalInputValue(""); 
      closeModal(); 
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Unos onChange={handleInputChange} />
        <BtnHolder>
          <CloseButton onClick={closeModal}>EXIT</CloseButton>
          <AddButton onClick={handleAddQuote}>ADD</AddButton>
        </BtnHolder>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
