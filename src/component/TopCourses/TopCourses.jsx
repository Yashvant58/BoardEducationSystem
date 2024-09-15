import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TopCourses.css'; // Custom CSS for the Top Courses section

const TopCourses = () => {
  const courses = [
    {
      title: 'Class 12',
      description: 'Complete Course',
      icon: '📙',
      path: '/class12', // Route for Class 12
    },
    {
      title: 'Class 11',
      description: 'Complete Course',
      icon: '📙',
      path: '/class11', // Route for Class 11
    },
    {
      title: 'Class 10',
      description: 'Complete Course',
      icon: '📙',
      path: '/class10', // Route for Class 10
    },
    {
      title: 'Class 9',
      description: 'Complete Course',
      icon: '📙',
      path: '/class9', // Route for Class 9
    },
  ];

  return (
    <div className="top-courses-section container">
      <h2 className="section-title">Explore Top Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="col-md-6 col-lg-3 course-card">
            <Link to={course.path} className="card-link">
              <div className="card">
                <div className="card-body">
                  <div className="course-icon">
                    <span>{course.icon}</span>
                  </div>
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
