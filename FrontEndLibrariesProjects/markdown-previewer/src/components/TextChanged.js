import React from 'react';

function createMarkup(a) {
    return {__html: a};
  }

  const TextChanged = () => (
    <div dangerouslySetInnerHTML={createMarkup()} />
  );
  
  export default TextChanged;