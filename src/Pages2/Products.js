import React from "react";
import { Outlet, useNavigate } from "react-router-dom";




const Products = () => {

    const navigate = useNavigate();


    return(
        <div>
            <h1>Products Page</h1>
            <p>Welcome to the Products page!</p>
            <button onClick={()=>navigate("")}>Apple</button>
            {/* <button onClick={()=>navigate("/apple")}>Apple 2</button>
            <button onClick={()=>navigate("/products/apple")}>Apple 3</button> */}
            <button onClick={()=>navigate("samsung")}>Samsung</button>
            <button onClick={()=>navigate("nokia")}>Nokia</button>



            <Outlet />
        </div>
    )
}

export default Products;