import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    name: "TS Project",
    img : "/assets/ts.png",
    disc : "I created the web-to-lead form and set up this web form in my Salesforce ORG for managing leads.",
    link: "https://fahim1971.github.io/Talent-Stacker/"
},
{
  name: "TS Salesforce project",
  img : "/assets/dashboard.png",
  disc : "Dashboards provide a snapshot of key metrics and performance indicators, helping businesses make informed decisions.",

},
{
  name: "Customall",
  img : "/assets/custom.jpg",
  disc : "My ongoing e-commerce project, which will be released in the USA at the end of this year,",
 
  
   },
{
  name: "Customall",
  img : "/assets/lab.jpg",
  disc : "My ongoing e-commerce project's design lab, where customers can make custom t-shirts with their design.",

},
{
  name: "TS Project",
  img : "/assets/pix.jpg",
  disc : "Designed API for PIxperfect which is an image editing service website. where people can hire an expert editor.",

},
    {
        name: "CodeBreakers",
        img : "/assets/codebreakers.png",
        disc : "Designed API for CodeBreakers which is a software engineering firm .They have a vast software engineering team that is always ready to develop a cost-effective software solution.",
        link: "https://codebreakers.quest/"
    },
    {
        name: "Clearfork Digital",
        img : "/assets/clearforkdc.png",
        disc : " Designed API for Clear Fork Digital which is a Salesforce and software solution provider based in the USA. They are committed to providing their customers with the best possible experience and services.",
        link: "https://clearforkdc.com/"
    },

  {
     name: "TS Salesforce project",
     img : "/assets/schema.png",
     disc : "Schema diagram of my Salesforce project, which gives us a complete overview of our object relations.",

    },
  
    {
      name: "TS Salesforce project",
      img : "/assets/wr.png",
      disc : "In-house warehouse software solution for medium-sized businesses, I have had the privilege of being the project manager of this project.",
 
     },
     {
      name: "TS Salesforce project",
      img : "/assets/app.png",
      disc : "A snapshot from my last talent stacker Salesforce voluntary project's APP",
 
     },
     {
      name: "TS Salesforce project",
      img : "/assets/email.png",
      disc : "My Salesforce email templates which is reusable email layouts that help streamline communication with leads, contacts, and customers within the Salesforce platform.",
 
     },
    {
        name: "Quickmed Patient App",
        img : "/assets/quickmed-patient.png",
        disc : "QuickMed, is a telemedicine platform, which offers online video consultation between patients and doctors drugs, diagnostics and e consultation in all over the world.",
        link: "https://play.google.com/store/apps/details?id=winmac.quickmed_doctor_app"
    },
    {
        name: "Quickmed Doctor App",
        img : "/assets/quickmed.jpg",
        disc : "QuickMed, is a telemedicine platform, which offers online video consultation between patients and doctors drugs, diagnostics and e consultation in all over the world.",
        link: "https://play.google.com/store/apps/details?id=winmac.quickmed_doctor_app"
    },
    {
        name: "Asia Fashion Tailors and Fabrics",
        img : "/assets/asiaFasion.png",
        disc : "Asia Fashion is a tailoring shop based on Chattogram. I have had the privilege of being the project manager for their very first in-house application.",
        link: "https://dribbble.com/shots/22640296-Asia-Fashion"
    },
 
  {
    name: "TS Project",
    img : "/assets/erd.png",
    disc : "Entity relationship diagram of my Salesforce project, which is a vital part of project design",

},
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #d9832e;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`