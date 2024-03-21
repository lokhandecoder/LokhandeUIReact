import React, { useState } from "react";
import "../Resources/Styles/TextFieldCss.css";
import TextField from "./TextField";

const TextFieldExample = () => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(e.target.value);
  };

  return (
    <div>
      <h1>How to Use React Text Field</h1>
      <p>
        Welcome to our tutorial on how to use the React text field component.
        Below, you'll find an example of a simple React text field that you can
        incorporate into your own projects.
      </p>
      <TextField />
      <h2>Usage:</h2>
      <p>
        To use the React text field component in your project, follow these
        steps:
      </p>
      <ol>
        <li>
          <p>
            Copy the code of the component into your project. You can find the
            component code below or in our documentation.
          </p>
        </li>
        <li>
          <p>Create a new file for the component, e.g., </p>
        </li>
        <li>
          <p>Import the component into your main application file.</p>
        </li>
        <li>
          <p>
            Use the component in your JSX where you want to render the text
            field.
          </p>
        </li>
      </ol>
      <p>
        And that's it! You've successfully integrated the React text field
        component into your project.
      </p>
    </div>
    // <div className="description-container">
    //   <h1>How to Use React Text Field</h1>
    //   <p>
    //     Welcome to our tutorial on how to use the React text field component.
    //     Below, you'll find an example of a simple React text field that you can
    //     incorporate into your own projects.
    //   </p>
    //   <h2>Example:</h2>
    //   <input
    //     type="text"
    //     value={textFieldValue}
    //     onChange={handleTextFieldChange}
    //     placeholder="Type something..."
    //     className="text-input"
    //   />
    //   <h2>Usage:</h2>
    //   <p>
    //     To use the React text field component in your project, follow these
    //     steps:
    //   </p>
    //   <ol>
    //     <li>
    //       <p>
    //         Copy the code of the component into
    //         your project. You can find the component code below or in our
    //         documentation.
    //       </p>
    //     </li>
    //     <li>
    //       <p>
    //         Create a new file for the component, e.g.,{" "}
    //       </p>
    //     </li>
    //     <li>
    //       <p>
    //         Import the component into your main
    //         application file.
    //       </p>
    //     </li>
    //     <li>
    //       <p>
    //         Use the  component in your JSX where
    //         you want to render the text field.
    //       </p>
    //     </li>
    //   </ol>
    //   <p>
    //     And that's it! You've successfully integrated the React text field
    //     component into your project.
    //   </p>
    // </div>
  );
};

export default TextFieldExample;
