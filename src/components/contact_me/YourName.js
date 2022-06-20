import React from 'react';
import TalkButton from '../Buttons/TalkButton';
import './contact_me.css'

const YourName = ({nextFunc}) => {

  return (
    <div className='form-wrap'>
        <div className='wizard-state'>
            <span className='active'>1</span>
            <span className='decoration-text'>
                your name
            </span>
            <span>2</span>
            <span>3</span>
        </div>
        <div className='form'>
            <h1 className='field-title'>Hi! What's your name?</h1>
            <div className='field-wrap'>
                <input className='field-input' placeholder='e.g. John'/>
            </div>
        </div>
        <div className='step-button-wrap align-right'>
            <TalkButton
                text="NEXT"
                func={nextFunc}
            />
        </div>
    </div>
  );
}

export default YourName;