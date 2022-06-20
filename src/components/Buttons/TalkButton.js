import React from 'react';
import './button.css'

const TalkButton = ({
  text,
  func
}) => {

  return (
    <div className="buttonWrap">
        <button 
          className="common-button" 
          onClick={func}
        >
           {text}
        </button>
    </div>
  );
}

export default TalkButton;