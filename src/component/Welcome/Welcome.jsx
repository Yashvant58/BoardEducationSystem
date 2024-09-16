import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Welcome.css'; // Custom styles for the modal

// Modal Styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '20px',
  },
};

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000); // 30 seconds = 30000 ms

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Welcome Modal"
    >
      <div className="modal-content">
        <h2>Welcome to Board Education System</h2>
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpg`} // Replace with your image path
          alt="Welcome"
          className="modal-image"
        />
        <p>
          बैच में जुड़ने के लिए Whatsapp करे <strong>9807757865</strong> <br />
          दोस्तो अगर आप बोर्ड परीक्षा 2024 कक्षा 10, 12 की तैयारी कर रहे हो तो आप
          सबसे अच्छे जगह पर हो! Board Education System 2016 से 2023 तक के सबसे
          अच्छे रिजल्ट्स और टॉपर्स देने वाला चैनल है।
        </p>
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Welcome;
