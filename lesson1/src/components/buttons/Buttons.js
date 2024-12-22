import React from 'react';
import Button from "../button/Button";
import classes from './Buttons.module.css';

const Buttons = ({title}) => {
    return (
        <div className={classes.buttons}>
            <Button title={'Save'}/>
            <Button title={'Edit'}/>
            <Button title={'Delete'}/>
        </div>
    );
};

export default Buttons;