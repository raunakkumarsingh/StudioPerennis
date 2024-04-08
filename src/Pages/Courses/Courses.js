import React, { useState } from 'react';
import './courses.css';
import courses from '../../Contents/Courses';
import Card from '../../Components/CourseCard/Card';
import SearchBar from '../../Components/SearchBar/SearchBar';

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-container ">
      <div className='my-4'> 
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="row  ">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-lg-4 col-md-6 mb-4">
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
