import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './login/userstore';
import LoginForm from './loginform';
import SubmitButton from './login/submitbutton';


class LoginApp extends React.Component {

    render() {
        
        return (
            <div className="loginapp">
                <div className='container'>
                    
                    <LoginForm />
                </div>

            </div>
        );
    }
}

export default observer(LoginApp);