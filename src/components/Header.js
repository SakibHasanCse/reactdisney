import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/auth/userSlice'
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch()
    const history = useHistory()
    const signIn = () => {
        auth.signInWithPopup(provider).then((response) => {
            let user = response.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push('/')

        })
    }
    const signOut = () => {
        auth.signOut().then((response) => {
            dispatch(setSignOut())
            history.push('/login')
        })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {!userName ? (
                <LoginContainer>

                    <Login onClick={signIn}>Login</Login>
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


                    <UserImage onClick={signOut} src={userPhoto} />
                </>
            }
        </Nav>
    )
}


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