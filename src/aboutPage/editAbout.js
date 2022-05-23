import React from "react";
import "./editAbout.css"
import axios from "axios";

export class EditAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "your eriginal email",
            password: "password but porbbaly all ****",
            firstName: "orginal first name",
            lastName: "original last name",
            phoneNum: "phone",
            address: "address",
            pronouns:"pronouns"
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    async submitInfo(e){
        e.preventDefault();
        console.log("asd");

        await axios.post("http://localhost:3001", this.state)
        .then(res => {
            console.log("asd");
            window.location.assign("google.com");
        })
        .catch(err => {
            console.log("this failed try again later");
        })
    }

    handleTextChange(e) {
        let changed = e.target.id;
        if(changed == "email"){
            this.setState({
                email : e.target.value
            });
        }
        else if(changed == "password"){
            this.setState({
                password : e.target.value
            });
        }
        else if(changed == "firstName"){
            this.setState({
                firstName : e.target.value
            });
        }
        else if(changed == "lastName"){
            this.setState({
                lastName : e.target.value
            });
        }
        else if(changed == "phoneNum"){
            this.setState({
                phoneNum : e.target.value
            });
        }
        else if(changed == "address"){
            this.setState({
                address : e.target.value
            });
        }
        else if(changed == "pronouns"){
            this.setState({
                pronouns : e.target.value
            });
        }

        
        
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitInfo} className="form">
                    <input
                        placeholder="email"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "email" 
                        value = {this.state.email}
                    />
                    <br />

                    <input
                        placeholder="Password"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "password" 
                        value = {this.state.password}
                    />
                    <br />

                    <input
                        placeholder="First Name"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "firstName" 
                        value = {this.state.firstName}
                    />
                    <br />

                    <input
                        placeholder="Last Name"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "lastName" 
                        value = {this.state.lastName}
                    />
                    <br />

                    <input
                        placeholder="Phone Number"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "phoneNum" 
                        value = {this.state.phoneNum}
                    />
                    <br />

                    <input
                        placeholder="Address"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "address" 
                        value = {this.state.address}
                    />
                    <br />

                    <input
                        placeholder="Pronouns"
                        onChange={this.handleTextChange}
                        className="textbox"
                        id = "pronouns" 
                        value = {this.state.pronouns}
                    />
                    <br />

                    <button onClick = {this.submitInfo} className = "submitButton"><h1>Save Changes</h1></button>
                    
                </form>
            </div>
        );
    }
}