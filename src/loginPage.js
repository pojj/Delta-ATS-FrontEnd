import React from 'react';
import axios from 'axios';

export class LoginPage extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          username:"",
          password:""
        }
      this.submit = this.search.bind(this);
      this.onChangeUser = this.onChangeUser.bind(this);
      this.onChangePass = this.onChangePass.bind(this);
    }

    async search(e){
        e.preventDefault();

        console.log("asd");



        console.log(this.state);
        //change url to whatever your location is (localhost:3000/poggers)
        //change this.state to howver you pelase
        //this.state is a json object with username and password
        await axios.post("localhost:3000/poggers", this.state)
        .then(res => {
            console.log("success");
        })
        .catch(err => {
          console.log("failure");
        })
        
    }

    onChangeUser(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePass(e){
        this.setState({
            password : e.target.value
        })
    }

    render(){
        return(
            <div>

                <form onSubmit={this.search}>
                    <label>
                        <input type="text" onChange={this.onChangeUser} placeholder="Username" />
                    </label>
                    <label>
                        <input type="text" onChange={this.onChangePass} placeholder="Password" />
                    </label>
                </form>
                <button onClick = {this.search} className = "submitButton"><h1>Search</h1></button>

                <h1>go to loginPage.js read my comments inside the submitUser function</h1>

            </div>
        )
    }
}