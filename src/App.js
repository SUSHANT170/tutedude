import React from 'react';
import './App.css';
import CustomNavBar from './components/CustomNavBar';
import BalanceContent from './components/BalanceContent';
import WorkContent from './components/WorkContent';
import Enrolled from './components/Enrolled';
function App() {
  // customNavBar()
  return (
    <>
      <div style={{ height: '100%', width: '100%', overflowX: 'hidden' }}>
        <CustomNavBar />
        <BalanceContent />
        <WorkContent />
        <Enrolled />
        <h4 style={{
          color: 'purple',
          marginLeft: '12.5rem',
          marginTop: '1rem',
          marginBottom:'1rem'
        }}>Terms & Conditions</h4>
      </div>
    </>
  )
}

export default App;
