import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header>
      </header>
      <main>
          <div className={'squaresAndEAC'}>
              <div className={'squares'}>
                  <div className={'firstSquare'}>
                      <div className={' square'}>
                      </div>
                  </div>
                  <div className={'secondSquare'}>
                      <div className={'square'}>
                      </div>
                  </div>
              </div>
              <div className={'equalAndCircle'}>
                  <div className={'equal'}>
                      <div className={'firstLane lane'}></div>
                      <div className={'secondLane lane'}></div>
                  </div>
                  <div className={'circleContainer'}>
                      <div className={'circle'}>
                      </div>
                  </div>
              </div>
          </div>
          <div className={'rectangle'}>
              <p>ABC</p>
          </div>
      </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
