import React from 'react';
import InputField from './login/inputfield';
import SubmitButton from './login/submitbutton';
//import UserStore from './login/userstore';
import { Title, Tile, Box, Container, Image, Button, Subtitle } from 'bloomer';
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false,
            loggedIn: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {
        let username = this.state.username;
        let password = this.state.password;
        
        try {
            if (this.state.loggedIn == false) {
            const result = await axios.post('http://localhost:5000/login', {"user": username, "password": password});
            alert("Welcome " + username);
            this.state.loggedIn = true;
            this.resetForm();
            } else {
                alert("You are already logged in");
                this.resetForm();
            }
        } catch (e) {
            alert("User not found");
            this.resetForm();
        }

    }

    async doLogout() {
        if (this.state.loggedIn === false) {
            alert("You are not logged in");
        } else {
            const result = await axios.get('http://localhost:5000/logout', {"user": this.state.username, "password": this.state.password});
            this.state.loggedIn = false;
            alert("Log Out successful");
            this.resetForm();
        }
    }

    render() {
        return (
            <div className="loginForm" id="login">

                <Container style={{display: 'flex', justifyContent:'center'}}>
                
                    <Box  style={{width: 600}}>
                    
                        <h1 className='title is-5' hasTextAlign='left' style={{marginBottom: 10}}>Username</h1>
                        <InputField
                            id='username'
                            type='text'
                            placeholder='Username'
                            value={this.state.username ? this.state.username : ''}
                            onChange={ (val) => this.setInputValue('username', val)}
                        />

                        <h1 className='title is-5' hasTextAlign='left' style={{marginBottom: 10}}>Password</h1>
                        <InputField
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={this.state.username ? this.state.password : ''}
                            onChange={ (val) => this.setInputValue('password', val)}
                        />

                        <Box hasTextAlign='centered' className="is-shadowless" style={{padding: 10}}>
                        <SubmitButton
                            text="Login"
                            disabled={this.state.buttonDisabled}
                            onClick={ () => this.doLogin()}
                        />
                        
                        <Box hasTextAlign='centered' className='is-shadowless' style= {{padding: 10}}>
                        <SubmitButton
                            text="Logout"
                            disabled={this.state.buttonDisabled}
                            onClick={ () => this.doLogout()}
                        />
                        </Box>
                        
                        
                        </Box>

                        

                        

                    </Box>
                </Container>
            </div>
        );
    }

}




export default LoginForm;