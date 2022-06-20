import React from 'react';
import TalkButton from '../Buttons/TalkButton';
import './contact_me.css'

const Completed = ({func}) => {

  return (
    <div className='form-wrap completed'>
        <div className='form'>
            <h1 className='field-title'>Thank you!</h1>
            <div className='field-wrap'>
                <p className='modal-description'>I will contact you shortly to clarify all the details</p>
            </div>
        </div>
        <div className='step-button-wrap justy-center'>
            <TalkButton
                text="BACK TO FORM"
                func={func}
            />
        </div>
    </div>
  );
}

export default Completed;