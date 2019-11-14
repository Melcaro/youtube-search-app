import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        onKeyDown={e => console.log(e.key)}
        placeholder="Enter your search"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export { SearchBar };
