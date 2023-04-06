import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(90deg, #246888 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: linear-gradient(90deg, #000000 0%, #246888 81.25%);
    padding: 30px 20px;
    border-radius: 10px;
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
`
export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    border: none;
    color: #FFFFFF;
`