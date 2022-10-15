import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
    return (
        <input 
        type="search" 
        placeholder="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        />
    );
}

export default SearchBox;