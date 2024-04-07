import React from 'react';

function Card({ course }) {
  return (
    <div className="card card-css mb-3" style={{ maxWidth: '18rem' }}>
      <div className="d-flex justify-content-center"> {/* Center the image */}
        <img src={require(`../../Assets/${course.image}`)} className="card-img-top" alt="Course" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text">{course.description}</p>
        <a href={course.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
}

export default Card;
