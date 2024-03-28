import React from "react";

function CasioKeyboard() {
  return (
    <div
      className="wrapper"
      aria-label="Casio PT-1 Keyboard illustration made with HTML and CSS"
    >
      <div className="casio" aria-hidden="true">
        <div className="speaker"></div>
        <div className="logo">
          <h1>
            <span>Casio</span> <span>PT-1</span>
          </h1>
        </div>
        <div className="controls">
          <div className="controls-labels">
            <p>mode</p>
            <p>volume</p>
            <p>tone</p>
            <p>tempo</p>
            <p>one key play</p>
          </div>
          <div className="controls-bar">
            <div className="mode-container">
              <div className="mode-bar"></div>
              <div className="mode-handle"></div>
            </div>
            <div className="volume-container">
              <div className="volume-bar"></div>
              <div className="volume-handle"></div>
            </div>
            <div className="tone-container">
              <div className="tone-bar"></div>
              <div className="tone-handle"></div>
            </div>
            <div className="clear btn"></div>
            <div className="del btn"></div>
            <div className="down btn"></div>
            <div className="up btn"></div>
            <div className="select btn"></div>
            <div className="reset btn"></div>
            <div className="demo btn"></div>
            <div className="memory btn"></div>
            <div className="onekey-1 bigbtn"></div>
            <div className="onekey-2 bigbtn"></div>
          </div>
        </div>
        <div className="keys-container">
          <div className="white">
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
          <div className="black">
            <div className="key"></div>
            <div className="key"></div>
            <div className=""></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className=""></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className=""></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className=""></div>
            <div className="key"></div>
            <div className="key"></div>
            <div className="key"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasioKeyboard;
