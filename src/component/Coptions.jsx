import React from 'react';
function Coptions(props) {
    console.log(props.sel)
    return ( <> 

     {
        Object.keys(props.options).map((x,y)=><option value={x}  >{x}</option>)
     }
                           

    </> );
}

export default Coptions;