import React from 'react';
import { useState, useEffect } from 'react';
import { fullName } from '../../utilities/functions';
import User from './../User/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data/users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div className="user-wrapper">
            {users.map(user => <User key={user.id} name={fullName(user.first_name, user.last_name)} email={user.email} gender={user.gender} />)}
        </div>
    )
};

export default Users;