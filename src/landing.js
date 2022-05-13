import React from 'react';
import "./landing.css";



export class Landing extends React.Component{
    render(){
        return(
            <div>
                <div className = "topPart">
                    
                </div>
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