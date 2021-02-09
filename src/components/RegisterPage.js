import React, {useState} from 'react'
import { InputWrapper, Button, Title, PasswordInput, StepButton, PageContainer,Form, SubTitle,InputContainer, TextInput, ImgWrap, Img, Message, RadioWrapper, RadioContainer } from './loginElements'
import { RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineUser, AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"
import {useHistory} from "react-router-dom"

import registerImg from "../assets/register.svg"

const RegisterPage = () => {
    const history = useHistory();
    const [pageStep, setStep] = useState(false);

    const handleToRegister = (e) => {
        e.preventDefault();
        history.push("/");
    };

    const handleStep = (e)=>{
        e.preventDefault();
        setStep(!pageStep);
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
            {pageStep ? (<InputContainer>
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
                <RadioContainer>
                <RadioWrapper>
                
                <input type="radio" id="male" name="sex" value="male"/>
                <label htmlFor="male">Male</label>
                </RadioWrapper>
                <RadioWrapper>
                
                <input type="radio" id="female" name="sex" value="female"/>
                <label htmlFor="male">Female</label>
                </RadioWrapper>
                </RadioContainer>         
            </InputContainer>) : (

                <InputContainer>
                    <InputWrapper>
                        <AiOutlineUser/>
                        <TextInput placeholder="Country"/>
                    </InputWrapper> 

                    <InputWrapper>
                        <RiLockPasswordLine/>
                        <PasswordInput placeholder="Password"/>
                    </InputWrapper>
                    <InputWrapper>
                        <RiLockPasswordLine/>
                        <PasswordInput placeholder="Repeat password"/>
                    </InputWrapper>
                    <Button>Register</Button>   
                </InputContainer>
            )}
            

            <Message>Already registered? Click here to <button onClick={(e)=>handleToRegister(e)}>sign-in</button></Message>
                <StepButton onClick={(e)=>handleStep(e)} step={pageStep ? 1:0}>
                    <span>1</span> 
                    <span>2</span> 
                    <span>{pageStep ? <AiOutlineArrowRight/> : <AiOutlineArrowLeft/>}</span>
                </StepButton>
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
