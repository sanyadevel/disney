import React from 'react';
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";


function Movies() {
    const movies = useSelector(selectMovies);

    console.log(movies)
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C2152F120E2AAB1D65E394A9AA74E3F6A717D4E495495A96FDFD58CA85B8BBD/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/en_hocus-pocus-2_c169_r_6446f738.jpeg?region=0,0,700,394" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/ro_she-hulk_dplusoriginal_c169_r_a7f0c3ae.jpeg?region=0,0,700,394" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/ro_thor-4_c169_r_4177d9fc.jpeg?region=0,0,700,394" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_826654b0.jpeg?region=0,0,540,810" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_0240ae6a.jpeg?region=0,0,540,810" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_8475a79c.jpeg?region=0,0,540,810&width=320" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_885c58d7.jpeg?region=0,0,540,810&width=320" alt=""/>
                </Wrap>
            </Content>

        </Container>
    );
}

export default Movies;

const Container = styled.div`
  
`
const Content = styled.div`
  display:grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249,249,249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
  rgb(0 0 0 /73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;
  
  img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
  }
`