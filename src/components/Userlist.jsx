import React from 'react';

function Userlist(props) {
    let users=["sachin","virat","rahul","rohit","jhon"]
    
    let useritems=users.map((user)=><li>{user}</li>)

    return (
        <div>
            <ul>
            {useritems}
            </ul>
        </div>
    );
}

export default Userlist;