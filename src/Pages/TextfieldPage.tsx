import React, { useState } from "react";
import CodeCard from "../Components/CodeCard/CodeCard";
import TextFieldExample from "../Components/TextFieldExample";
import componentToJsxString from "../util";
import CodeViewer from "../Components/CodeCard/CodeViewer";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
function TextfieldPage() {
  const code = 
  `
  import React, { useState } from "react";
  import "../Resources/Styles/TextFieldCss.css"

  const TextFieldExample = () => {
    const [textFieldValue, setTextFieldValue] = useState<string>("");

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextFieldValue(e.target.value);
    };

    return (
      <div className="text-field-container">
        <h1>React Text Field Demo</h1>
        <input
          type="text"
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder="Type something..."
          className="text-input" 
        />
        <p className="output-text">You typed: {textFieldValue}</p>
      </div>
    );
  };

  export default TextFieldExample;

  `;
  const css = `
  .text-field-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .text-input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px;
    margin-bottom: 20px;
  }
  
  .output-text {
    font-size: 18px;
  }
  
  `
  return (
    <>
      <CodeViewer html={code} css={css} component={TextFieldExample} />
    </>
  );
}

export default TextfieldPage;
