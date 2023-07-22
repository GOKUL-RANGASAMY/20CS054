import React from 'react';
// import './sort.css'
const SortedIntegersDisplay = ({ sortedIntegers }) => {
  return (
    <div>
      <h2 className='url'>URL CONTAINS</h2>
      <h4 className='values'>
        {sortedIntegers.map((integer) => (
          <p key={integer}>{integer}</p>
        ))}
      </h4>
    </div>
  );
};

export default SortedIntegersDisplay;
