import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
    selectUserName,
    selectUserPhoto
} from '../features/auth/userSlice'

const Header = () => {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto)
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {!userName ? (
                <LoginContainer>

                    <Login>Login</Login>
                </LoginContainer>
            )
                :
                <>

                    <NavMenu >
                        <a>
                            <img src="/images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a> <a>
                            <img src="/images/watchliist-icon.svg" alt="" />
                            <span>WATCHLIST</span>
                        </a> <a>
                            <img src="/images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>


                    <UserImage src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-1/p320x320/86264389_1066822800317772_2323266682216251392_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=bV54YhlY5RoAX8D9IEj&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=47c88d09d174885dc42365dc36475c08&oe=60B682C8" />
                </>
            }
        </Nav>
    )
}
console.log("")

export default Header



const Nav = styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0px 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width:80px ; 
  
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
   margin-left:25px;
   align-items:center;
    a{
        display:flex;       
        align-items:center;
        padding:0px 12px;
        cursor: pointer;
       

        img{
            height:20px;

        }
        span{
            font-size:13px;
            letter-spacing:1.42;
            position:relative;

            &:after{
                content:"";
                background:white;
                height:2px;
                position:absolute;
                right:0;
                left:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform:scaleX(0)
            }

        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1

            }
        }
    }
`
const UserImage = styled.img`
    height:48px;
    width:48px;
    border-radius:50%;

`
const Login = styled.div`
        border: 1px solid #f9f9f9;
        padding: 8px 16px;
        border-radius:4px;
        letter-spacing:1.5px;
        text-transform:uppercase;
        background-color:rgba(0, 0 , 0,0.6);
        cursor: pointer;
    &:hover{
        background:white;
        color:rgba(0, 0 , 0,0.6);
        border-color:transparent;

    }
`
const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`