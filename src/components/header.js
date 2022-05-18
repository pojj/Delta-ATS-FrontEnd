import React from "react";
import "./header.css"
import { Image } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "" };

        this.topBar = (
            <div className="topPart">


                <div className="banner">
                    <p>hi</p>
                    </div>

                
                <div className="logo">
                    <background-image src="./Header.svg" className="banner"/>
                </div>

            </div>
        );
    }
    render() {
        return (<div>{this.topBar}</div>)
    }
}

export default Header;