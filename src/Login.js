import React from 'react';
import './Login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
function Login(){
    let userName ="John";
    let passWord ="Doe";

    function onload(){
        userName = document.getElementById('Username').value;
        passWord = document.getElementById('Password').value;
    }
    
    const Auth = props => {
        if(userName === "John" && passWord=== "Doe"){
            this.props.history.push('./App.js');
        }
    }
      return(
        <div className="container" onLoad={onload}>
            <div className="form-box">
                <div className="header-form">
                <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                <div className="image">
                </div>
            </div>
            <div className="body-form">
                <form>
                    <div className="input-group mb-3">
                        <input id = "Username" className="form-control" type = "text" placeholder="Username" required/>
                    </div>
                    <div className="input-group mb-3">
                        <input id = "Password" className="form-control" type = "password" placeholder="Password" required/>
                    </div>
                    <button type="button" className="btn btn-secondary btn-block" onClick={Auth}>LOGIN</button>
                    
                </form>
            </div>
          </div>
        </div>   
      )
    }
  export default Login