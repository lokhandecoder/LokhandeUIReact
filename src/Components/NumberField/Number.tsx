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
