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
    }
`

export const ToDoList = styled.div`
    background: linear-gradient(90deg, #000000 0%, #246888 81.25%);
    padding: 30px 20px;
    border-radius: 10px;
    
    @media screen and (max-width: 500px){
        width: 350px;
    }@media screen and (max-width: 500px){
        width: 350px;
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
        width: 350px;
    }
`
export const Button = styled.button`
    background: #8052EC;
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
    }

    &:active{
        opacity: .7;
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
        width: 250px;
    }
`
export const NoTask = styled.h3`
    padding-top: 20px;
    margin-bottom: 1px;
    text-align: center;
    color: #FFFFFF;
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
