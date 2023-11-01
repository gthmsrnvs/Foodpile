import React from 'react';
import ReceiptScanner from './components/ReceiptScanner';
import PantryTracker from './components/PantryTracker';

function App() {
  return (
    <div className='App'>
      <ReceiptScanner />
      <PantryTracker />
    </div>
  );
}

export default App;