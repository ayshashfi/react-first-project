import React,{ useRef } from 'react';
import MyInput from './MyInput.js';

export default function Form() {
    // Create a ref
    const inputRef = React.createRef();

    // Focus on the input when the button is clicked
    const handleClick = () => {
      inputRef.current.focus();
    };
  
    return (
      <div>
        {/* Use the ChildComponent and pass the ref */}
        <MyInput ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  };