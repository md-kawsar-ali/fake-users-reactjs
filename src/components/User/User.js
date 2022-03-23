import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div className="user">
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Gender: {props.gender}</p>
        </div>
    );
};

export default User;