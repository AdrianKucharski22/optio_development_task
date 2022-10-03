import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header>
      </header>
      <main className={'border flex'}>
          <div className={'squaresAndEAC'}>
              <div className={'squares'}>
                  <div className={'firstSquare'}>
                      <div className={' square border'}>
                      </div>
                  </div>
                  <div className={'secondSquare'}>
                      <div className={'square border'}>
                      </div>
                  </div>
              </div>
              <div className={'equalAndCircle'}>
                  <div className={'equal flex'}>
                      <div className={'firstLane lane'}></div>
                      <div className={'secondLane lane'}></div>
                  </div>
                  <div className={'circleContainer flex'}>
                      <div className={'circle border'}>
                      </div>
                  </div>
              </div>
          </div>
          <div className={'rectangle border flex'}>
              <p>ABC</p>
          </div>
      </main>
  </React.StrictMode>
);

