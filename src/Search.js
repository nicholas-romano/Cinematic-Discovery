import { useRef } from "react";
import useKey from "./useKey";

const Search = ({ searchQuery, setSearchQuery }) => {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setSearchQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      ref={inputEl}
    />
  );
};
export default Search;
