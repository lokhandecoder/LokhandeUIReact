import React from 'react'
import CodeViewer from '../Components/CodeCard/CodeViewer'
import TextFieldExample from '../Components/TextFieldExample';
import NumberFieldExample from '../Components/NumberField/NumberFieldExample';

function NumberField() {
    const code = 
    `
    import React, { useState } from "react";

    function Number() {
      const [numberfieldValue, setnumberFieldValue] = useState<number>(0);
    
      const handleNumberFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setnumberFieldValue(parseInt(e.target.value));
      };
    
      return (
        <>
          <div className="text-field-container">
            <input
              type="number"
              value={numberfieldValue}
              onChange={handleNumberFieldChange}
              placeholder="Type something..."
              maxLength={20}
              className="text-input"
            />
          </div>
          <p className="output-text">
            You typed: <b>{numberfieldValue}</b>
          </p>
        </>
      );
    }
    
    export default Number;    
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
    <CodeViewer html={code} css={css} component={NumberFieldExample} />
    </>
  )
}

export default NumberField
