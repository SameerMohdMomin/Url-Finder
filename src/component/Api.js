import React, { useEffect, useState } from 'react';

const Api=({urls})=>{


const getdata=urls.map((data) =>{
        return <div><a href={data}>{data}</a></div> 
})


    return(
        <div className="container">   
            <div className="row p-4">
            {getdata}
            </div>
                    
        </div>
    );
};

export default Api;