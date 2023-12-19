import React from 'react';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Home;
