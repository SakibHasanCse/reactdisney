import React from 'react';
import styled from 'styled-components'

const Details = () => {
    return (
        <Container>
            <Background>
                <img src="https://i.ytimg.com/vi/TY55Ur3eWgk/maxresdefault.jpg" alt=""/>
            </Background>
            <ImageTitle>
              <img src="data:image/jpeg;base64,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" alt=""/>
            </ImageTitle>
            <Controls>
                <PlyButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>

                </PlyButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>


            </Controls>
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
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        height:100%;
        width:100%;
         object-fit:content;

       
    }

`

const Controls = styled.div`
display:flex;
`

const PlyButton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
padding:0px 24px;
align-items:center;
margin-right:22px;
height:56px;
border:none;
background:rgba(249 , 249 , 249);
letter-spacing:1.8px;
cursor: pointer;

&:hover{
    background:rgb(198, 198 ,198)
}
`

const AddButton = styled.button`

`

const TrailerButton = styled(PlyButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgba(249 , 249 , 249);
`

const GroupWatchButton = styled.button`

`