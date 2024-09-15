import React, { useState } from 'react';
import './Que.css'; // For styling

const Que = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to handle the dropdown toggle for answers
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: 'Why Choose Board Education System?',
      answer: 'Board Education System offers a comprehensive approach to learning with well-structured material and expert guidance for students from class 9 to 12, focusing on both academic excellence and practical understanding.'
    },
    {
      question: 'Our Vision?',
      answer: 'Our vision is to provide accessible, high-quality education to students, nurturing their potential and preparing them for a bright future with a solid foundation in academic and real-world skills.'
    },
    {
      question: 'What Board Education System provide?',
      answer: 'We provide e-notes, video lectures, live sessions, doubt-solving, and mentorship programs to help students excel in board exams and beyond. Our resources cater to both Hindi and English mediums.'
    },
    {
      question: 'Does Board Education System have any other channels?',
      answer: 'Yes, our YouTube channel, "Board Education System," features free educational videos, live sessions, and other useful content for students across various classes.'
    },
    {
      question: 'Do we provide other features?',
      answer: 'We offer personalized learning plans, mock tests, revision notes, career guidance, and workshops on exam strategies and time management to help students succeed.'
    },
    {
      question: 'How to get our expert notes?',
      answer: 'Expert notes are available for free on our website and mobile app. Download them in either Hindi or English mediums for board exam preparation.'
    },
    {
      question: 'Does Board Education System have a learning App?',
      answer: 'Yes, we have a mobile app available on Android that provides access to video lectures, notes, quizzes, and mock tests for a seamless learning experience.'
    },
    {
      question: 'How to contact Board Education System in case of queries and feedback?',
      answer: 'You can contact us via email at support@boardeducationsystem.com or call us at 9807757865. We are happy to assist you with any queries or feedback.'
    }
  ];

  return (
    <div className="faq-section container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6 col-sm-12">
          {questions.slice(0, 4).map((item, index) => (
            <div key={index} className="faq-item">
              <h4 onClick={() => toggleQuestion(index)} className="faq-question">
                {item.question} 
                <span className="arrow">{openQuestion === index ? '▼' : '▶'}</span>
              </h4>
              {openQuestion === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="col-md-6 col-sm-12">
          {questions.slice(4).map((item, index) => (
            <div key={index + 4} className="faq-item">
              <h4 onClick={() => toggleQuestion(index + 4)} className="faq-question">
                {item.question} 
                <span className="arrow">{openQuestion === index + 4 ? '▼' : '▶'}</span>
              </h4>
              {openQuestion === index + 4 && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Que;
