import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <div className='register'>
                <form className='register_form'>
                    <div className='title'>
                        <span>Sign Up</span>
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
                        className='button'
                        onClick={() => this.props.history.push('login')}>
                        Confirm
                    </button>
                </form>
            </div>
        );
    }
}

export default Register;
