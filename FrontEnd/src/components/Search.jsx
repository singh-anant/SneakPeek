import React from 'react'

const Search = ({setSearch}) => {
return (
    <div className="search">
    <div className="search-container">
        <input type="text" className="searchTerm" placeholder="Looking for Sneakers?"
            onChange={(event)=>setSearch(event.target.value)}
        />
        {/* <button type="submit" className="searchButton">Search</button> */}
</div>
</div>

)
}

export default Search
