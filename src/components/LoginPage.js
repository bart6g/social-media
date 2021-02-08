import React, {useState} from 'react'
import { InputWrapper, Button, Title, PasswordInput, PageContainer,Form, SubTitle, TextInput, ImgWrap, Img, Message } from './loginElements'
import { RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {useHistory} from "react-router-dom"


import loginImg from "../assets/login.svg"

const LoginPage = () => {
    const history = useHistory()
    const handleToRegister = (e) => {
        e.preventDefault();
        history.push("/register");
    }

    return (
        <PageContainer>
            <ImgWrap
            initial={{ translateX: -200, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: -200, opacity: 0 }}
            transition={{duration: 1}}
            >
                <Img src={loginImg} />
            </ImgWrap>
            <Form
            initial={{ translateX: 200, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 200, opacity: 0 }}
            transition={{duration: 1}}
            >
                <Title>Welcome</Title>
                <SubTitle>to our service</SubTitle>
                    <InputWrapper>
                        <AiOutlineUser/>
                        <TextInput placeholder="Username or email"/>
                    </InputWrapper>
                    <InputWrapper>
                        <RiLockPasswordLine/>
                        <PasswordInput placeholder="Password"/>
                    </InputWrapper>

                        <Button>Login</Button>
                    <Message>New here? Click here to <button onClick={(e)=>handleToRegister(e)}>sign-up</button></Message>
            </Form> 
      </PageContainer>
    )
}

export default LoginPage
