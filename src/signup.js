import React from 'react';
import { Title, Tile, Box, Container, Image, Button, Subtitle, Input, useState } from 'bloomer';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import LoginApp from "./loginapp";
import SignupForm from './signupform';


function SignUp() {

    
    
    return (
        <div>
            <Container>
                        <Box className="is-shadowless">
                            <Link to="/"><Button isColor='primary' className="is-pulled-right">Return to Home</Button></Link>
                        </Box>
                        
                        <Box hasTextAlign='centered' className="is-shadowless">
                            <Title isSize={1}>Sign Up</Title>
                        </Box>
            </Container>
            <SignupForm />
        </div>
    
    );
}

export default SignUp;