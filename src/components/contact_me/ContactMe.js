import React, { useState } from 'react';
import YourName from './YourName';
import ContactInfo from './ContactInfo';
import Consulting from './Consulting';
import Completed from './Completed';
import './contact_me.css'

const ContactMe = ({closeModal}) => {

    const [step, setStep] = useState(0);

    const nextStep = () => {
        console.log("dove!");
        if (step < 3) {
            setStep(step + 1);
        }
    }

    const backStep = () => {
        console.log("dove!");
        if (step > 0) {
            setStep(step - 1);
        }
    }

    const checkModal = (e) => {
        if (e.target.className === "contact-me-wrap") {
            closeModal();
        }
    }

  return (
    <div className="contact-me-wrap"
        onClick={checkModal}
    >
        <div className='container contact-modal'>
            <div className='left-back'>
                <div className='close-button'>
                    <a
                        onClick={closeModal}
                    >X Close</a>
                </div>
                <div className='title-container'>
                    <h1 className='modal-title'>Contact me</h1>
                    <p className='modal-description'>Fill this form and I'll contact you as soon as possible</p>
                </div>
            </div>
            {
                step === 0 ? 
                    <YourName
                        nextFunc={nextStep}
                    /> :
                step === 1 ?
                    <ContactInfo
                        nextFunc={nextStep}
                        backFunc={backStep}
                    /> :
                step === 2 ?
                    <Consulting
                        nextFunc={nextStep}
                        backFunc={backStep}
                    /> :
                step === 3 ?
                    <Completed
                        func={() => setStep(0)}
                    /> :
                null
            }
        </div>
    </div>
  );
}

export default ContactMe;