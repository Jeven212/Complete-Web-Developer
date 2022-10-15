import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <input
        id="search"
        type="search" 
        placeholder="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        />
    );
}

export default SearchBox;