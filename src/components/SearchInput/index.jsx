import P from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

SearchInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func,
};
