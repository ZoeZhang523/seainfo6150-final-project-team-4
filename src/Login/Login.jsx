import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <div className='login'>
                <form className='login_form'>
                    <div className='title'>
                        <span>Log In</span>
                    </div>
                    <div className='emailCol'>
                        <input
                            label='Email'
                            type='email'
                            className='email'
                            placeholder=' Please enter your email'
                        />
                    </div>
                    <div className='passwordCol'>
                        <input
                            label='Password'
                            type='password'
                            className='pwd'
                            placeholder=' Please enter your password'
                        />
                    </div>
                    <button
                        variant='contained'
                        className='confirm'
                        onClick={() => this.props.history.push('/')}>
                        Confirm
                    </button>
                    <button
                        variant='contained'
                        className='sign_up'
                        onClick={() => this.props.history.push('/Register')}>
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
