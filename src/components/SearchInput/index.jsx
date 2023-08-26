import "./styles.css";

export const SearchInput = ({ actionFn, inputValue }) => {
  return (
    <input
      className="search-input"
      type="search"
      value={inputValue}
      onChange={actionFn}
      placeholder="Type your search"
    />
  );
};
