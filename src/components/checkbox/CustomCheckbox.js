
import React from 'react';
import './checkbox.css';
import Checkbox from 'react-custom-checkbox';


const CustomCheckbox = ({ sname, label, isChecked, handleChange }) => {
  
    return (
      <div
        style={{
          marginTop: 20
        }}
      >
        <Checkbox 
            label={label}
            className="custom-checkbox"
            size={32}
            borderColor={isChecked ? "#FF5C00" : "#1F1F1F"}
            borderWidth={isChecked ? 3 : 2}
            style={{
                boxShadow: isChecked ? "0px 0px 5px #FF5C00" : "none"
            }}
            labelStyle={{
                fontSize: "20px",
                lineHeight: "32px",
                letterSpacing: "0.08em",
                color: "#1F1F1F",
                flex: "none",
                order: 1,
                flexGrow: 0,
                marginLeft: 20
            }}
            borderRadius={11}
            name={"consulting"}
            value={label}
            onChange={(v) => handleChange(sname, v)}
        />
      </div>
    );
};

export default CustomCheckbox;