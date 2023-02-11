import './App.css';
import { useState } from 'react';
import Confetti from 'react-confetti';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

import Stage_00 from './components/stage_00';
import Stage_01 from './components/stage_01.js';
import Stage_02 from './components/stage_02.js';
import Stage_03 from './components/stage_03.js';
import Stage_04 from './components/stage_04.js';
import Stage_05 from './components/stage_05.js';
import Stage_06 from './components/stage_06.js';
import Stage_07 from './components/stage_07.js';
import Stage_08 from './components/stage_08.js';

function App() {

  let [pageCount, setPageCount] = useState(8)
  let [confetti, seConfetti] = useState(false)

  let verifyCode = (entry, correctCode) => {

    let capEntry
    if (typeof entry === 'string') {
      capEntry = entry.toUpperCase()
    }
    if (entry == correctCode || capEntry === correctCode) {
      seConfetti(true)
      setTimeout(() => {
        seConfetti(false)
        setPageCount(pageCount + 1)
      }, 6000)
    } else {
      alert("OPS INCORRECT CODE")
    }
  }

  const startGame = () => {
    setPageCount(1)
  }

  const { width, height } = useWindowSize()
  return (

    <div className="App">
      <audio controls className='audio' preload='meta' src="audio/background.mp3"></audio>

      {confetti &&
        <div className='confetti'>
          <Confetti
            width={width}
            height={height}
          />
          <audio autoPlay className='audio' preload='auto' src="audio/cheer.mp3"></audio>
        </div>
      }

      {pageCount === 0 && <Stage_00 startGame={() => startGame()}></Stage_00>}
      {pageCount === 1 && <Stage_01 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={53214} ></Stage_01>}
      {pageCount === 2 && <Stage_02 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={1986} ></Stage_02>}
      {pageCount === 3 && <Stage_03 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={563} ></Stage_03>}
      {pageCount === 4 && <Stage_04 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={"BBCA"} ></Stage_04>}
      {pageCount === 5 && <Stage_05 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={"QSKVOLB"} ></Stage_05>}
      {pageCount === 6 && <Stage_06 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={6428} ></Stage_06>}
      {pageCount === 7 && <Stage_07 verifyCode={(entry, correctCode) => verifyCode(entry, correctCode)} correctCode={"🐥❤️🐰"} ></Stage_07>}
      {pageCount === 8 && <Stage_08></Stage_08>}


    </div>
  );
}

export default App;
