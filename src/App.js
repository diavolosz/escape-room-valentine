import './App.css';
import { useState } from 'react';

import Stage_00 from './components/stage_00';
import Stage_01 from './components/stage_01.js';

function App() {

  let [pageCount, setPageCount] = useState()



  return (
    <div className="App">
      
      <Stage_01></Stage_01>



    </div>
  );
}

export default App;
