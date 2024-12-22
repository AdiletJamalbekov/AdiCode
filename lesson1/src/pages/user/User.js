import React from 'react';
import classes from './User.module.css';

const User = ({name, age}) => {
    return (
        <div>
            <h1 className={classes.user}>User: {name}</h1>
            <p className={classes.age}>Age: {age}</p>
        </div>
    );
};

export default User;