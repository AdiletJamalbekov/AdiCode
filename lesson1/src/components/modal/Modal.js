import React from 'react';
import classes from './Modal.module.css';
import Input from "../input/Input";
import Button from "../button/Button";

const Modal = ({
                   children,
                   handleShow,
                   onChangeInputTask,
                   handleAdd
}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button title={'closed'} action={handleShow}/>
                {children}
                <Input
                    type={'test'}
                    placeholder={'Wording name takes'}
                    onChange={onChangeInputTask}
                />
                <Button title={'Add'} action={handleAdd}/>
            </div>
        </>
    );
};

export default Modal;