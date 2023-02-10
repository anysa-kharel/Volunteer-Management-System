import React from 'react';
import Volundata from '../components/volundata';

const Showresult = () =>{
    console.log(Volundata);
    return(
        <>
        {
           Volundata.map((data) =>
            {
            return <div key={data.id}>{data.program}</div>
           } )
      
        }
          
        
        </>

    )
}

export default Showresult;