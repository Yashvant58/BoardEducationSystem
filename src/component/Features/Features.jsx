import React from 'react';
import './Features.css'; // Custom CSS for the Features section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBook, faVideo, faQuestionCircle, faPaperPlane, faGraduationCap, faChalkboardTeacher, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    {
      title: '100% Free',
      description: 'Quality Education',
      icon: faCheckCircle, // Icon from FontAwesome
    },
    {
      title: '100% Complete',
      description: 'Syllabus',
      icon: faBook,
    },
    {
      title: 'Doubt Solving',
      description: 'Sessions',
      icon: faQuestionCircle,
    },
    {
      title: 'Recorded Video',
      description: 'Lectures',
      icon: faVideo,
    },
    {
      title: 'Live Interactive',
      description: 'Classes',
      icon: faChalkboardTeacher,
    },
    {
      title: 'Exam Preparation',
      description: 'Videos',
      icon: faGraduationCap,
    },
    {
      title: 'Previous Year',
      description: 'Questions',
      icon: faClipboardList,
    },
    {
      title: 'Sample Paper &',
      description: 'E-Notes',
      icon: faPaperPlane,
    },
  ];

  return (
    <div className="features-section container">
      <h2 className="section-title">Our Features</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 col-sm-6 feature-box">
            <div className="feature-card">
              <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
