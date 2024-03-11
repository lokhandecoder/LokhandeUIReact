import React from 'react'
import CodeCard from '../Components/CodeCard/CodeCard';

function TextfieldPage() {
    const code = `
    function greet(name) {
      return 'Hello, ' + name + '!';
    }
    console.log(greet('World'));
    `;
      const output = "Hello, World!";
    
  return (
    <>
    <div>textfieldPage</div>
    <CodeCard code={code} output={output} />

    </>
  )
}

export default TextfieldPage