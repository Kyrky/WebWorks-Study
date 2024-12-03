import React, { useState } from 'react';
import Modal from './Modal';
import LabWork1 from '../pages/LabWork1';
import LabWork2 from '../pages/LabWork2';
import LabWork3 from '../pages/LabWork3';
import LabWork4 from '../pages/LabWork4';
import LabWork5 from '../pages/LabWork5';
import LabWork6 from '../pages/LabWork6';
import LabWork7 from '../pages/LabWork7';
import '../styles/LabWorks.css'; 

const LabWorks = () => {
  const [modalOpen, setModalOpen] = useState(null); 

  const openModal = (labNumber) => setModalOpen(labNumber);
  const closeModal = () => setModalOpen(null);

  return (
    <div>
      <h1>Lab Works</h1>
      <button onClick={() => openModal(1)}>Lab Work 1</button>
      <button onClick={() => openModal(2)}>Lab Work 2</button>
      <button onClick={() => openModal(3)}>Lab Work 3</button>
      <button onClick={() => openModal(4)}>Lab Work 4</button>
      <button onClick={() => openModal(5)}>Lab Work 5</button>
      <button onClick={() => openModal(6)}>Lab Work 6</button>
      <button onClick={() => openModal(7)}>Lab Work 7</button>

      {modalOpen && (
        <Modal onClose={closeModal}>
          {modalOpen === 1 && <LabWork1 />}
          {modalOpen === 2 && <LabWork2 />}
          {modalOpen === 3 && <LabWork3 />}
          {modalOpen === 4 && <LabWork4 />}
          {modalOpen === 5 && <LabWork5 />}
          {modalOpen === 6 && <LabWork6 />}
          {modalOpen === 7 && <LabWork7 />}
        </Modal>
      )}
    </div>
  );
};

export default LabWorks;
