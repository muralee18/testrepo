import React from 'react';

function Login(props) {
    return (
        <div>
            <p>Username:<input type="text" placeholder='Username'/></p>
            <p>Password:<input type="password" placeholder='Username'/></p>
            <p><input type="Submit" value="Submit"/></p>
            
            
        </div>
    );
}

export default Login;