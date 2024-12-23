import React from 'react';
import User from "../user/User";
import Input from "../input/Input";
import Buttons from "../../components/buttons/Buttons";
import Example from "../../components/example/Example";
import Header from "../../components/header/Header";

const MainPage = () => {

    const navBar = ["Главная", "Контакты", "О нас", 'navBar']

    return (
        <React.Fragment>
            <Header navBar={navBar}/>
            <User name={'Adilet'} age={23}/>
            <Input/>
            <Buttons/>
            <Example>
                <p style={{color: 'red', fontSize: '25px'}}>User</p>
                <p>Age</p>
            </Example>
        </React.Fragment>
    );
};

export default MainPage;