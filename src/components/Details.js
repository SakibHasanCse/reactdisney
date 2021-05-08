import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'
const Details = () => {
    let { id } = useParams();
    const [movies, setMovies] = useState()
    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
            if (doc.exists) {
                setMovies(doc.data())
            } else {

            }
        })
    }, [])

    return (
        <Container>
            <Background>
                <img src={movies && movies.backgroundImg} alt="" />
            </Background>
            <ImageTitle>
                <img src={movies && movies.titleImg} alt="" />
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
                    <span>+</span>

                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />

                </GroupWatchButton>


            </Controls>
            <SubTitle>
                {movies && movies.subTitle}
            </SubTitle>
            <Description>

                {movies && movies.description}
            </Description>
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
    margin-top:60px;
    img{
        height:100%;
        width:100%;
         object-fit:content;

       
    }

`

const Controls = styled.div`
display:flex;
align-items:center;
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
    margin-right:16px;
    height:44px;
    width:44px;
    display:flex;   
    align-items:center;
    justify-content:center;
    cursor:pointer;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0, 0 , 0 ,0.6);
    span{
        font-size:30px;
        color:white;
    }

`

const TrailerButton = styled(PlyButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249 , 249 , 249);
color:rgb(249 , 249 , 249);
text-transform:uppercase;
`

const GroupWatchButton = styled(AddButton)`
background-color:rgb(0,0,0)

`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:20px;
`

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249 , 249 , 249);
max-width:760px;

`