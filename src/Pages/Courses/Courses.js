import React from 'react';
import './courses.css';
import courses from '../../Contents/Courses';
import Card from '../../Components/CourseCard/Card';

function Courses() {
  return (
    <div className="course-container ">
      <div className="row  ">
        {courses.map((course) => (
          <div key={course.id} className="col-lg-4 col-md-6 mb-4">
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
