import React from "react";
import "./App.css";

// page1:
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Error from "./Pages/Error";

// page2:
import Products from "./Pages2/Products";
import Samsung from "./Pages2/Samsung";
import Apple from "./Pages2/Apple";
import Nokia from "./Pages2/Nokia";

import {Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Routes>

            <Route path="/" element={<Navbar />} >
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            


            <Route path="/apple" element={<Apple />} />  

                <Route path="/products" element={<Products />} >
                    <Route path="" element={<Apple />} />  
                    {/* actual url of children rourte is: parent route+children route */}
                    <Route path="samsung" element={<Samsung />} />
                    <Route path="nokia" element={<Nokia />}/>
                </Route>

                


                

            </Routes>
                
        </div>
    );
}

export default App;



// 


{/* <Navbar />
            <Routes>
                  <Route path="/"  element={<Home />}/>
                  <Route path="/about"  element={<About />}/>
           </Routes>


           {/* <Route path="/blog"  element={<Blog />}/>
            <Route path="/contact"  element={<Contact />}/>
            <Route path="*"  element={<Error />}/> */ 
     }


    //  Nav1 , Nav2

        // <Routes>
        //     <Route path="/fruits"  element={<Nav />}>
        //         <Route path=""  element={<Apple />}/>
        //         <Route path="mango"  element={<Mango />}/>
        //         <Route path="banana"  element={<Banana />}/>
        //     </Route>

        //     <Route path="/veg"  element={<Nav2 />}>
        //         <Route path=""  element={<Apple />}/>
        //         <Route path="mango"  element={<Mango />}/>
        //         <Route path="banana"  element={<Banana />}/>
        //     </Route>

        // </Routes> */}