import React from 'react';
import "./landing.css";
import { Image } from 'react-bootstrap';



export class Landing extends React.Component{
    render(){
        //this is the stuff at the top of the entire landing page
        //just sort of made sense to make it an object of some sort so its easier to move around
        let topPart = 
        (
            <div className = "topPart">
                <div className = "logo">
                    <Image src = "./DeltaLogo.png" className = "logoImg"/>
                </div>
                <div className = "navButtons">

                    <button className = "topButton register rounded-pill">
                        Register
                    </button>

                    <a href='https://www.google.com/' className = "topButton textButton">
                        Login
                    </a>

                    <a href='https://www.google.com/' className = "topButton textButton">
                        About
                    </a>

                    <a href='https://www.google.com/' className = "topButton textButton">
                        Contact Us
                    </a>
                </div>
            </div>
        );         

        return(
            <div>
                {topPart}
                
                <div className = "content">
                    <div className='titleBox'>
                        <h1 className = "title">Catchphrase that's as long as this</h1>
                    </div>
                    <div className = "divider"/> <div className = "divider"/> <div className = "divider"/>
                    <div className = "textBox">
                        <p className = "bottomText">
                            among us among us among us among us <br/>
                            among us among us among us among us <br/>
                            among us among us among us among us
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}