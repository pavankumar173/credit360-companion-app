import React from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import SummaryCard from './components/SummaryCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <UploadForm />
        <SummaryCard score={725} />
      </main>
    </div>
  );
}

export default App;
