import React, { useState } from 'react';
import Modal from './Modal';
import PracticalWork1 from '../pages/PracticalWork1';
import PracticalWork2 from '../pages/PracticalWork2';
import PracticalWork3 from '../pages/PracticalWork3';
import PracticalWork4 from '../pages/PracticalWork4';
import PracticalWork5 from '../pages/PracticalWork5';
import '../styles/PracticalWorks.css';

const PracticalWorks = () => {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (workNumber) => setModalOpen(workNumber);
  const closeModal = () => setModalOpen(null);

  return (
    <div className="practicalworks-container">
      <h1>Practical Works</h1>
      <div className="practicalworks-buttons">
        <button onClick={() => openModal(1)}>Practical Work 1</button>
        <button onClick={() => openModal(2)}>Practical Work 2</button>
        <button onClick={() => openModal(3)}>Practical Work 3</button>
        <button onClick={() => openModal(4)}>Practical Work 4</button>
        <button onClick={() => openModal(5)}>Practical Work 5</button>
      </div>

      {modalOpen && (
        <Modal onClose={closeModal}>
          {modalOpen === 1 && <PracticalWork1 />}
          {modalOpen === 2 && <PracticalWork2 />}
          {modalOpen === 3 && <PracticalWork3 />}
          {modalOpen === 4 && <PracticalWork4 />}
          {modalOpen === 5 && <PracticalWork5 />}
        </Modal>
      )}
    </div>
  );
};

export default PracticalWorks;
