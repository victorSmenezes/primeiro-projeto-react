import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #246888 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        margin-top: 40px;
        padding-left: 10px;

        @media screen and (max-width:500px){
        margin-top: 5px;
    }
    }    
`

export const ToDoList = styled.div`
    background: linear-gradient(90deg, #000000 0%, #246888 81.25%);
    padding: 30px 20px;
    border-radius: 10px;
    
    @media screen and (max-width: 500px){
        width: 70%;
        display: flex;
        flex-direction: column-reverse;
    }
    
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    font-size: 16px;
    padding-left: 10px;
    height: 45px;
    margin-right: 25px;
    width: 390px;

    @media screen and (max-width: 500px){
        width: auto;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
    }
`
export const Button = styled.button`
    background: #5a00b3;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 50px;
    border: none;
    color: #FFFFFF;
    width: 130px;
    cursor: pointer;

    &:hover{
        opacity: .9;
        color: #A8AFAF;
    }

    &:active{
        opacity: .6;
    }

    @media screen and (max-width: 460px){
        width: 100px;
        position: relative;
        left: 35%;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 30px;
    width: 490px;

    li{
        list-style: none;
    }

    @media screen and (max-width: 500px){
        width: auto;
        font-size: 14px;
        height: 70px;
        margin-top: 10px;
    }
`
export const NoTask = styled.h3`
    padding-top: 20px;
    margin-bottom: 1px;
    text-align: center;
    color: #FFFFFF;

    @media screen and (max-width:500px){
        padding-top: 2px;
        margin-bottom: 5px;
        margin-top: 2px;
    }
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    width: 20px;
    height: 20px;
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    width: 20px;
    height: 20px;
`

export const Footer = styled.footer`
    width: 140px;
    height: 30px;
    background: #7c7c7ccb;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
    opacity: .7;
    }

    &:active {
    opacity: .9;
    background-color: #acacac;
    }
`

export const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: rgb(163, 202, 89);
    cursor: pointer;
    `
