import React from "react";

export default function Search({ search, searchInput, handleSearch }) {
   return (
      <div className="Search">
         <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
      </div>
   );
}
