import Form from 'react-bootstrap/Form';
function Search({searchTerm,onSearchChange,displayedAirlines}){
    return(
        <>
  <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
        </>
    )
}
export default Search;

/*<label htmlFor="search"><h1>Search Airline</h1></label>
<input  type="text" id="search" value={search} onChange={(e)=>onSearchChange(e.target.value)} />*/