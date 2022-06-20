import React, {useState} from 'react';
import TalkButton from '../Buttons/TalkButton';
import LeftArrowSvg from "../../assets/imgs/left-arrow.svg";
import CustomCheckbox from '../checkbox/CustomCheckbox';
import './contact_me.css';

const RadioGropupInput = () => {
    const [devInput, setDevInput] = useState(false);
    const [growthInput, setGrowthInput] = useState(false);
    const [uxuiInput, setUxuiInput] = useState(false);
  
    const handleChange = (idx, inputValue) => {
        console.log(idx, inputValue);
        if (idx === "dev") setDevInput(inputValue);
        if (idx === "growth") setGrowthInput(inputValue);
        if (idx === "uxui") setUxuiInput(inputValue);
    };
  
    return (
      <div>
        <CustomCheckbox 
            label="tech development"
            sname="dev"
            isChecked={devInput}
            handleChange={handleChange}
        />
        <CustomCheckbox 
            label="growth start"
            sname="growth"
            isChecked={growthInput}
            handleChange={handleChange}
        />
        <CustomCheckbox 
            label="UX/UI"
            sname="uxui"
            isChecked={uxuiInput}
            handleChange={handleChange}
        />
        
      </div>
    );
  };

const Consulting = ({nextFunc, backFunc}) => {

  return (
    <div className='form-wrap'>
        <div className='wizard-state'>
            <span className='active'>1</span>
            <span className='active'>2</span>
            <span className='active'>3</span>
            <span className='decoration-text'>
                type of consulting
            </span>
        </div>
        <div className='form'>
            <h1 className='field-title'>What type of consulting do you need?</h1>
            <div className='field-wrap'>
                <RadioGropupInput />
            </div>
            <div className='field-wrap'>
                <textarea className='field-input' rows="1" placeholder='Comment(optional)'/>
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

export default Consulting;