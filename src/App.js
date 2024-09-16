import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Main from './pages/main';

import Navbar from './components/Navbar';
import Header from './components/Header';



const App = () => {
  return (
<div className="flex h-screen flex-row-reverse">
      {/* Side Menu */}
      <div className="w-1/6">
        <Navbar />
      </div>
      {/* Content */}
      <div className="flex-1 relative overflow-y-auto">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <Header />
        </div>

        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        {/* Other routes go here */}
      </Routes>
      </div>
    </div>




  );
};

export default App;
