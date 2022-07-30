import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    background: silver;
    width: 280px;
    padding: 10px;
    border-radius: 20px;
`
export const Title = styled.h2`
    font-size: 20px;   
`
export const ProfilePic = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px;
`
export const UserOn = styled.div`
    display: flex;
    width: 200px;
    flex-direction: grid;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    background: red;
`
export const OnOff = styled.a`
    height: 12px; 
    width: 12px;
    border-radius: 50%;
    background: green;
    position: absolute;
    margin-right: 60px;
    margin-bottom: 23px;
`
export const Name = styled.span``