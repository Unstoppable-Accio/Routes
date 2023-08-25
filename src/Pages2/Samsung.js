import React from "react";
import Items from "./Items";
import { useNavigate } from "react-router-dom";


const Samsung = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Samsung Page</h1>
            <p>Welcome to the Samsung page!</p>

            <Items name="Samsung Galaxy" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzgdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzgdins-537686681?$1300_1038_PNG$" />

            <Items name="Samsung s6" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzgdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzgdins-537686681?$1300_1038_PNG$" />


            <Items name="Samsung Tab" link="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e346bzgdins/gallery/in-galaxy-f34-6gb-ram-sm-e346bzgdins-537686681?$1300_1038_PNG$" />
           
           {/* <button onClick={()=> navigate(-1)}> Back</button> */}
        </div>
    )
}

export default Samsung;