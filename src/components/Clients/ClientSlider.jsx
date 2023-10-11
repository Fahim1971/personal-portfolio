import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";

const ClientSlider = (props) => {
    const {name, position, img_url, stars, disc} = props.item;
    const [seeMore, setSeeMore] = useState(false);

    const fullTestimonial = () => {
        setSeeMore(!seeMore);
    }
  return (
    <Container>
        <Header>
            <span className='quote'><IoIosQuote/></span>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar/>
                    </span>
                ))}
            </div>
        </Header>
        <Body>
            {seeMore === true ? disc : disc.slice(0,180)}
            <p style={{
                fontSize: '1rem',
                fontWeight: '300',
                color: '#d9832e',
            }} onClick={fullTestimonial}>See more</p>
        </Body>
        <Footer>
            <img src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{position}</p>
            </div>
        </Footer>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: #eaedf2 ;
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #d9832e;
        opacity: 0.7;
    }

    .star{
        color: #d9832e;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    color: #000;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
        object-fit: cover;
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        color: #000;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: #000;
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`