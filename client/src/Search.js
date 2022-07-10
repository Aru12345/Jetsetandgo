function Search({search,onSearchChange}){
    return(
        <>
        <label htmlFor="search"><h1>Search Airline</h1></label>
        <input  type="text" id="search" value={search} onChange={(e)=>onSearchChange(e.target.value)} />
        </>
    )
}
export default Search;