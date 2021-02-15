import React, { useEffect, useState } from 'react';

function Output() {
  const [value, setValue] = useState(localStorage.getItem('Current'));

useEffect(() => {
    var newVal = localStorage.getItem('Current');
    if (newVal !== value){
        setValue(newVal);
    }
  
}, [value]);


  return (
    <div>
        {value}
    </div>
  );
};

export default Output;