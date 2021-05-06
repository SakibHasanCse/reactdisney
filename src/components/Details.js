import React from 'react';
import styled from 'styled-components'

const Details = () => {
    return (
        <Container>
            <Background>
                <img src="/images/slider-badag.jpg" alt=""/>
            </Background>
            <ImageTitle>
              <img src="/images/slider-badag.jpg" alt=""/>
            </ImageTitle>
        </Container>
    );
}

export default Details;

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;

`
const Background = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    opacity:0.8;


    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }

`
const ImageTitle = styled.div`
    height:30vh;
    img{
        height:100%;
        width:100%;
       
    }

`