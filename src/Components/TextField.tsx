import React, { useState } from "react";
import "../Resources/Styles/TextFieldCss.css";

const TextField = () => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(e.target.value);
  };

  return (
    <>
      <div className="text-field-container">
        <input
          type="text"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder="Type something..."
          maxLength={20}
          className="text-input"
        />
      </div>
      <p className="output-text">You typed: <b>{textFieldValue}</b></p>
    </>
  );
};

export default TextField;
