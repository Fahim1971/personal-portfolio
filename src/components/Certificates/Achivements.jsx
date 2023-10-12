import React, { useRef, useState } from 'react'
import Certificate from "./Certificate";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const certificates = [
    {
        img: "./img/admin.png",
        date: "10 june 2023",
        issued: "Salesforce"
    },
    {
        img: "./img/udemy.png",
        date: "09 dec 2022",
        issued: "udemy"
    },
    {
        img: "./img/inovi.png",
        date: "01 dec 2022",
        issued: "Inovi solutions"
    },
    {
        img: "./img/inovi.png",
        date: "01 dec 2022",
        issued: "Inovi solutions"
    }
];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}
const Achivements = () => {

    const arrowRef = useRef(null);
        let clientDisc = "";
        clientDisc = certificates.map((item, i) => (
            <Certificate item={item} key={i}/>
        ))
    return (
       <Container>
        <section className="section gray-bg text-dark justify_content">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Achivements</h3>
                            <p className="text-uppercase small">I'm excited to feature my achievements</p>
                        </div>
                    </div>
                </div>
                <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button style={{color: '#d9832e'}}
                    onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack/></button>
                    <button style={{color: '#d9832e'}}
                    onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward/></button>
                </Buttons>
                </Testimonials>
            </div>
        </section>
        
       </Container>
    ); 
};

export default Achivements;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        text-transform: uppercase;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #d9832e;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`