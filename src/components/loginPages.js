import React, { Component } from 'react'
class LoginPages extends Component {
    _signin = () => {
        console.log("sign in")
    }
    render() {
        return (
            <div>
                LoginPages
                <button onClick={this._signin}>login</button>
            </div>
        )
    }
}
export default LoginPages