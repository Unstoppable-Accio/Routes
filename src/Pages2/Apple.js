import React from "react";
import Items from "./Items";
import { useNavigate } from "react-router-dom";


const Apple = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Apple Page</h1>
            <p>Welcome to the Apple page!</p>

            <Items name="iphone" link="https://www.jiomart.com/images/product/original/492850650/apple-mlxw3hna-macbook-air-apple-m2-chip-8gb-256gb-ssd-macos-monterey-liquid-retina-34-46-cm-13-6-inch-space-grey-digital-o492850650-p592242755-1-202206282208.jpeg?im=Resize=(420,420)" />

            <Items name="ipad s6" link="https://www.jiomart.com/images/product/original/492850650/apple-mlxw3hna-macbook-air-apple-m2-chip-8gb-256gb-ssd-macos-monterey-liquid-retina-34-46-cm-13-6-inch-space-grey-digital-o492850650-p592242755-1-202206282208.jpeg?im=Resize=(420,420)" />


            <Items name="MAcbook" link="https://www.jiomart.com/images/product/original/492850650/apple-mlxw3hna-macbook-air-apple-m2-chip-8gb-256gb-ssd-macos-monterey-liquid-retina-34-46-cm-13-6-inch-space-grey-digital-o492850650-p592242755-1-202206282208.jpeg?im=Resize=(420,420)" />

            <button onClick={()=> navigate("/products/samsung")}> Go to Samsung 1</button>
            {/* <button onClick={()=> navigate("products/samsung")}> Go to Samsung 2</button> */}
            {/* <button onClick={()=> navigate(1)}> Go to Samsung 3</button> */}
           
        </div>
    )
}

export default Apple;