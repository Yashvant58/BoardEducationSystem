import React from 'react';
import './Testimonials.css';



const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dhananjay Singh',
      class: 'Class 12th',
      message: 'Thank you so much to Board Education System for helping me clear my concepts through their lectures. I scored 97.4% in my board exams of class 12th. Their lectures helped me go in-depth into every topic and make a strong base out of it!',
    },
    {
      name: 'Prashant Maurya',
      class: 'Class 12th',
      message: 'I am Prarthana BK from Mysore, Karnataka. I study in Capitol Public School. I have scored an overall percentage of 97.3% as the school topper in my 10th grade. I am ever grateful to the Board Education System team for providing excellent education at 0 cost.',
    },
    {
      name: 'Aman Kumar',
      class: 'Class 10th',
      message: 'One thing I would like to share is that I joined with Board Education System when I was in 9th. It has very awesome faculties that helped me at every step of my journey to boards. Because of this, I am able to score 96.60% in boards.',
    },
  ];

  return (
    <div className="testimonials-section container">
      <h2 className="section-title">What Students Say About Us 😍</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4 col-sm-12">
            <div className="testimonial-card">
              <p className="testimonial-message">"{testimonial.message}"</p>
              <div className="testimonial-info">
                <h5 className="student-name">{testimonial.name}</h5>
                <p className="student-class">{testimonial.class}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
