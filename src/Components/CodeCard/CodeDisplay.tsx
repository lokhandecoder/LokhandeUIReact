import React, { useState, useEffect } from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeDisplay.css'; // Add your CSS file for styling

interface CodeDisplayProps {
  initialCode: string;
  output: React.ReactNode;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ initialCode, output }) => {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-display">
      <div className="code">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-textarea"
          rows={10}
          cols={40}
        />
      </div>
      <div className="output">
        {output}
      </div>
    </div>
  );
};

export default CodeDisplay;
