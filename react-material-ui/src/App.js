import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';

function App() {
  return (
    <div>
      <Navbar/>
      <CourseList/>
    </div>
  );
}

export default App;
