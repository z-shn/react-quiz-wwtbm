import { useState, useEffect } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import data from './data';
//=====================================================================
function App() {
  const [qno, setQNO] = useState(1);
  const [timeOver, setTimeOver] = useState(false);
  const [prize, setPrize] = useState('$ 0');
  const moneyPyramid = [
    { id: 1, amount: '$ 100' },
    { id: 2, amount: '$ 200' },
    { id: 3, amount: '$ 300' },
    { id: 4, amount: '$ 500' },
    { id: 5, amount: '$ 1000' },
    { id: 6, amount: '$ 2000' },
    { id: 7, amount: '$ 4000' },
    { id: 8, amount: '$ 8000' },
    { id: 9, amount: '$ 16000' },
    { id: 10, amount: '$ 32000' },
    { id: 11, amount: '$ 64000' },
    { id: 12, amount: '$ 125000' },
    { id: 13, amount: '$ 250000' },
    { id: 14, amount: '$ 500000' },
    { id: 15, amount: '$ 1000000' },
  ].reverse();

  useEffect(() => {
    qno > 1 &&
      setPrize(moneyPyramid.find((item) => item.id === qno - 1).amount);
  }, [qno]);

  //========================================= RETURN

  return (
    <div className="app">
      <div className="main">
        {timeOver ? (
          <h1 className="prizeText"> You earned : {prize}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                setTimeOver={setTimeOver}
                qno={qno}
                setQNO={setQNO}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item) => (
            <li
              className={
                qno === item.id ? 'moneyListItem active' : 'moneyListItem'
              }
            >
              <span className="moneyListItemNumber">{item.id}</span>
              <span className="moneyListItemAmount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
