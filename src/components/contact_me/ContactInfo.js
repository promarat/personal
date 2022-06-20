import React from 'react';
import TalkButton from '../Buttons/TalkButton';
import LeftArrowSvg from "../../assets/imgs/left-arrow.svg";
import './contact_me.css'

const ContactInfo = ({nextFunc, backFunc}) => {

  return (
    <div className='form-wrap'>
        <div className='wizard-state'>
            <span className='active'>1</span>
            <span className='active'>2</span>
            <span className='decoration-text'>
                contact data
            </span>
            <span>3</span>
        </div>
        <div className='form'>
            <h1 className='field-title'>How can I contact you?</h1>
            <div className='field-wrap'>
                <input className='field-input' placeholder='phone number'/>
            </div>
            <div className='field-wrap'>
                <input className='field-input' placeholder='email'/>
            </div>
        </div>
        <div className='step-button-wrap'>
            <div className='back-button'>
                <a onClick={backFunc}>
                    <img src={LeftArrowSvg} />
                    <span className='back-button-text'>Back</span>
                </a>
            </div>
            <TalkButton
                text="NEXT"
                func={nextFunc}
            />
        </div>
    </div>
  );
}

export default ContactInfo;