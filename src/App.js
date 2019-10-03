import React from 'react';
import Sidebar from './components/UI/Sidebar';
import Body from './components/containers/Body';
import Footer from './components/UI/Footer';
import './App.sass';

function App() {
  return (
    <>
      <div className="main-app columns">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
