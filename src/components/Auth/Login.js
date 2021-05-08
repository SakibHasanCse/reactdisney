import React from 'react';
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat illum laborum eum officiis nesciunt perferendis expedita sequi ea corrupti.Lorem, ipsum dolor sit amet
                </Description>
                <CTAlogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content:center;

    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url('/images/login-background.jpg');
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.8;
        z-index:-1;
    }
`
const CTA = styled.div`
        max-width:650px;
        padding:80px 40px;
        width:90%;
        display:flex;
        flex-direction:column;
        margin-top:100px;
        align-items:center;

`
const CTAlogoOne = styled.img`

`

const SignUp = styled.a`
    width:100%;

    background-color:#0063e5;
    text-align:center;
    font-weight:bold;
    padding:17px 0;
    cursor:pointer;
    border-radius:4px;
    font-size:18px;
    transition: all 250ms;
    margin-top:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background:#0483ee
    }
`

const Description = styled.p`
   font-size:11px;
   text-align:center;
   line-height:1.5;
  


`
const CTAlogoTwo = styled.img`
width:90%;
`