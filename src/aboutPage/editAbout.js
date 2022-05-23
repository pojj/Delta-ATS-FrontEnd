import React from "react";
import "./editAbout.css"

export class EditAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "your eriginal email",
            password: "blank or something",
            firstName: "orginal first name",
            lastName: "original last name",
            phoneNum: "you get the gist",
            address: "asd",
            pronouns:"asd"
        };

        this.handleTextChange = this.handleTextChange.bind(this);
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


        
        
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
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

                    <div className="right-align">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot My Password</a>
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}