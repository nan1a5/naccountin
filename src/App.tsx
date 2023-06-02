import React from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <Content />
      </main>
    </div>
  );
}

export default App;
