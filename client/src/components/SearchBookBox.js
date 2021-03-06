import React from "react";
 

function SearchBookBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          label="Search Book"
          type="search"
          placeholder="Rebecca "
          aria-label="Search"
     
        />
       <button onClick={() => console.log("get some books! ")}>Search!</button>  
      </form>
    </div>
  );
}
export default SearchBookBox;
