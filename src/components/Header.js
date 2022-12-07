import React from 'react';
import styled from "styled-components";


function Header() {
    return (
        <Nav>
            <Logo src='./images/logo.svg'/>

            <NavMenu>
                <a>
                    <img src="./images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="./images/search-icon.svg" alt="search"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="./images/watchlist-icon.svg" alt="watch-list"/>
                    <span>WATCH LIST </span>
                </a>
                <a>
                    <img src="./images/original-icon.svg" alt="original-icon"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="./images/movie-icon.svg" alt="movie"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="./images/series-icon.svg" alt="home"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://avt-6.foto.mail.ru/mail/alexandru.besleaga/_avatar180?'/>

        </Nav>);
};

export default Header;


const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  cursor: pointer;
  overflow-x: hidden;

`

const Logo = styled.img`
  width: 80px;

`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;

    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background-color: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`