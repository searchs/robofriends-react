import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2 ma2  light-blue'>
      <input
        type='search'
        placeholder='Search robots'
        className='pa3 ba bw1 b--solid b--gray br2'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
