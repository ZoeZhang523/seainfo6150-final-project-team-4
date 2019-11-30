import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };
    handleChange1 = (event) => {
        var email = event.target.email;
        this.setState({email: email});
      };
      handleChange2 = (event) => {
        var password = event.target.password;
        this.setState({password: password});
      };
    render() {
        return (
            <div className='register'>
                <form className="register_form">
                    <div className='title'>
                        <span>Sign Up</span>
                    </div>
                    <div className='emailCol'>
                        <input
                            label='Email'
                            type='email'
                            className='email'
                            placeholder=' Please enter your email'
                            value={this.state.email}
                            onChange={this.handleChange1}
                        />
                    </div>
                    <div className='passwordCol'>
                        <input
                            label='Password'
                            type='password'
                            className='pwd'
                            value={this.state.password}
                            placeholder=' Please enter your password'
                            onChange={this.handleChange2}
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
