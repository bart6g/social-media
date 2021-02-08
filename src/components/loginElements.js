import styled from "styled-components"
import { motion } from "framer-motion"

export const PageContainer = styled(motion.div)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5cdb95;

    /* #05386b */
    /* #379683 */
    /* #8ee4af; */
    /* #edf5e1; */
`

export const Form = styled(motion.form)`
    background-color: #8ee4af;
    width: 300px;
    height: ${({register}) => register? "500px" : "380px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    position: relative;
`


export const Title = styled.h1`
    color: #05386b;
    /* margin-bottom: 5px; */
`

export const SubTitle = styled.h3`
    color: white;
    margin-bottom: 30px;
`

export const InputWrapper = styled.div`

display: flex;
/* justify-content: center; */
align-items: center;
background-color: white;
margin: 10px;
border-radius: 30px;
width: 225px;
padding-left: 10px;

`

export const TextInput = styled.input.attrs({
    type: 'text'
})`

    border: none;
    outline: none;
    background-color:transparent;
    padding: 5px 10px;


`
export const PasswordInput = styled.input.attrs({
    type: 'password'
})`

border: none;
    outline: none;
    background-color:transparent;
    padding: 5px 10px;
`

export const Button = styled.button`
    width: 85px;
    height: 32px;
    color: white;
    background-color: #05386b; 
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 25px;
    margin-top: 10px;
`

export const ImgWrap = styled(motion.div)`
    max-width: 400px;
    @media screen and (max-width: 600px){
        display: none;
    }


`

export const Img = styled.img`
width: 100%;
`
export const Message = styled.div`
    position: absolute;
    bottom: -40px;
    color: white;
    font-weight: 500;
    width: 400px;
    text-align: center;
    button{
        outline: none;
        border: none;
        background: transparent;
        margin-left: 5px;
        color: #05386b;
        font-weight: 900;
        cursor: pointer;
    }
`