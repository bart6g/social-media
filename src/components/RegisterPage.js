import React, {useState} from 'react'
import { InputWrapper, Button, Title, PasswordInput, PageContainer,Form, SubTitle, TextInput, ImgWrap, Img, Message } from './loginElements'
import { RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import {useHistory} from "react-router-dom"

import registerImg from "../assets/register.svg"

const RegisterPage = () => {
    const history = useHistory()
    const handleToRegister = (e) => {
        e.preventDefault();
        history.push("/");
    }



    return (
        <PageContainer>
            <Form register={true}
            initial={{ translateY: -200, opacity: 0 }}
            animate={{ translateY: 0, opacity:1 }}
            exit={{ translateY: -200, opacity: 0}}
            transition={{duration: 1}}
            >
            <Title>Welcome</Title>
            <SubTitle>to our service</SubTitle>
            <InputWrapper>
                <AiOutlineUser/>
                <TextInput placeholder="First name"/>
            </InputWrapper>
            <InputWrapper>
                <AiOutlineUser/>
                <TextInput placeholder="Last name"/>
            </InputWrapper>
            <InputWrapper>
                <AiOutlineUser/>
                <TextInput placeholder="Email"/>
            </InputWrapper>
            <InputWrapper>
                <RiLockPasswordLine/>
                <PasswordInput placeholder="Password"/>
            </InputWrapper>
            
            <Button>Register</Button>
            <Message>Already registered? Click here to <button onClick={(e)=>handleToRegister(e)}>sign-in</button></Message>
            </Form> 
            <ImgWrap
            initial={{ translateY: 200, opacity:0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 200, opacity: 0 }}
            transition={{duration: 1}}
            >
                <Img src={registerImg} />
            </ImgWrap>
      </PageContainer>
    )
}

export default RegisterPage
