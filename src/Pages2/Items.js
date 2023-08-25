import React from "react";


const Items = ({name, link}) => {

    return(
        
        <div className="items">
            <img src={link} alt="" />
            <h1>{name}</h1>
          
        </div>
    )
}

export default Items;