import React, { useEffect, useState } from 'react';

const Search= props =>{

    const [search,setsearch] = useState([]);

    // console.log(search)

    const handleform =(e)=>{
        e.preventDefault();
        props.onsearch(search)
    }


    return(
        <div>   
                <div> <h1>URL FINDER</h1></div>
                <form onSubmit={handleform} className="form-control d-flex justify-content-center" style={{border:'2px solid black'}}>
                    <input className="form-control w-50" style={{backgroundColor: 'lightgreen'}} type="text" placeholder="Enter Url"  value={search} onChange={(e) => setsearch(e.target.value)}/>
                </form>
        </div>
    );
};

export default Search;