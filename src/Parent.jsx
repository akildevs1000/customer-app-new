import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [childData, setChildData] = useState('');

  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Data from Child: {childData}</h1>
      <Child sendDataToParent={handleChildData} />
    </div>
  );
};

export default Parent;
