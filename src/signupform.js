import React from 'react';
import InputField from './login/inputfield';
import SubmitButton from './login/submitbutton';
//import UserStore from './login/userstore';
import { Title, Tile, Box, Container, Image, Button, Subtitle } from 'bloomer';
import axios from 'axios';

class SignupForm extends React.Component {

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

    async doSignup() {
        let username = this.state.username;
        let password = this.state.password;
        
        try {
            if (this.state.loggedIn === false) {
                const result = await axios.post('http://localhost:5000/signup', {"user": username, "password": password});
                alert("Welcome " + username);
                this.state.loggedIn = true;
                this.resetForm();
            } else {
                alert("You are already logged in");
            }
        } catch (e) {
            alert("This user already exists");
        }

    }

    render() {
        return (
            <div className="signupForm" id="signup">

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
                            text="Sign Up"
                            disabled={this.state.buttonDisabled}
                            onClick={ () => this.doSignup()}
                        />
                        </Box>


                    </Box>
                </Container>
            </div>
        );
    }

}




export default SignupForm;