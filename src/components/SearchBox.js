
const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2 ma2'>
      <input
        type='search'
        placeholder='Search robots'
        className='pa3 ba bw1 b--solid b--gray br2 w-30 center db ma4 '
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
