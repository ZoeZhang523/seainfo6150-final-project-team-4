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
                <form>
                    <div className='title'>
                        <span>Log In</span>
                    </div>
                    <div className='emailCol'>
                        <input
                            label='Email'
                            type='email'
                            className='email'
                            placeholder=' Please enter your email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='passwordCol'>
                        <input
                            label='Password'
                            type='password'
                            className='pwd'
                            value={this.state.password}
                            placeholder=' Please enter your password'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        variant='contained'
                        className='button'
                        onClick={() => this.props.history.push('/')}>
                        Confirm
                    </button>
                    <button
                        variant='contained'
                        className='button'
                        onClick={() => this.props.history.push('/Register')}>
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;
