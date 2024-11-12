import React from 'react';

const Child = ({ sendDataToParent }) => {
  const data = 'Hello from Child!';

  return (
    <div>
      <button onClick={() => sendDataToParent(data)}>
        Send Data to Parent
      </button>
    </div>
  );
};

export default Child;
