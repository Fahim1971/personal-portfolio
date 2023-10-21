import React, { useRef} from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let clients = [
    {
        name : "Al Muttakin",
        position : "Dev Lead",
        img_url : "/assets/al.jpg",
        stars : 5,
        disc : `Shahariar is an exceptional Software Project Manager. His leadership skills, technical expertise, and commitment to success are truly commendable. Working with him has been a pleasure, and I highly recommend him for any project management role. Shahariar consistently delivers outstanding results.`
    },
  
    {
        name : "Santiago Llorach",
        position : "Salesforce Administator",
        img_url : "/assets/san.png",
        stars : 5,
        disc : `I am writing to recommend my workmate, Shahariar, who has been working with me as a Salesforce Administrator for Clear Fork Digital Consulting. Shahariar has been an invaluable member of our team, and I believe he would be an asset to any organization.
        During his time at Clear Fork Digital Consulting, Shahariar has demonstrated exceptional skills in Salesforce administration. He has a deep understanding of the platform and is able to gather detailed requirements and provide full solution documentation for requirement delivery`
    
    
    },
    {
        name : "Evan Oyster",
        position : "Entrepreneur",
        img_url : "/assets/evan.png",
        stars : 5,
        disc : `Shahariar is a passionate and skilled software developer and Salesforce Admin. His work is always to customer specifications, looks very clean, and he excellent communication and collaboration skills greatly facilitated our team.
        `
    },
    {
        name : "Lynsie Ruzicka",
        position : "Salesforce Administator",
        img_url : "/assets/lyn.png",
        stars : 5,
        disc : `I had the pleasure of working alongside Shahariar in a Salesforce project for Talent Stacker. He brings a blend of strategic vision and hands-on execution to the table. He is proficient with Experience Cloud and ahead of the curve when it comes to AI integration within Salesforce.

        One of the aspects I most admire about Shahariar is his commitment to staying updated with the latest technological advancements. He is a joy to work with. His flexibility and friendly demeanor make collaborating with him not just productive but also enjoyable. 
        
        I recommend Shahariar for any project that requires expertise in Salesforce and project management.`
    
    
    },
    {
        name : "Amanat Khan",
        position : "Software engineer",
        img_url : "/assets/a.png",
        stars : 5,
        disc : `I have been working with Mr. Rashid for more than two years. We have directly involved with three projects. He is very passionate and determined with his work. As a project manager, his strong communication skills made him an asset of our company. I am highly recommend him.`
    
    
    },
    {
        name : "Mari johann",
        position : "Salesforce Administator",
        img_url : "/assets/m.png",
        stars : 5,
        disc : `I’ve had the good fortune to work with Shahariar on multiple Salesforce org and app builds for Clear Fork Digital Consulting and Talent Stacker. Shahariar is a talented developer, entrepreneur, project manager, and Salesforce Certified Administrator.
        Shahariar approaches buildouts analytically and creatively, always customizing to the client’s specific requirements and acceptance criteria. On our builds, Shahariar has solutioned using the entire gamut of Salesforce functionality including: data migration, flow automations, data modeling including building custom apps, objects and fields with validation rules and record types and reports & dashboards. He has advanced knowledge of formulas and flows. Shahariar’s expertise in both programmatic and declarative development make him a well-rounded problem solver.`
    
    
    },
    {
        name : "Md. Fahim Islam",
        position : "Software Engineer @Shapla",
        img_url : "/assets/f.png",
        stars : 5,
        disc : `I highly recommend Shahariar Rashid Fahim as a software project manager. Fahim consistently demonstrated exceptional leadership, technical expertise, and strong communication skills throughout our project. His ability to plan, organize, and execute complex software projects while keeping the team motivated and focused was truly impressive. Fahim's dedication to delivering high-quality results on time and within budget is commendable, and he consistently went above and beyond to ensure the success of our projects. His collaborative and proactive approach makes him an asset to any team, and I have no doubt that he will excel in any role he takes on.`
    
    
    },
    {
        name : "M.Eklasur Rahman",
        position : "Software Engineer @BUET",
        img_url : "/assets/ek.png",
        stars : 5,
        disc : `I had the pleasure of working closely with Shahariar Rashid Fahim on a recent project, and I highly recommend him outstanding contributions. Shahariar consistently demonstrated a remarkable ability to grasp complex concepts and apply them effectively. His attention to detail and commitment to delivering high-quality work were truly commendable. Shahariar was not only a valuable team member but also a pleasure to work with. I have no doubt that he will continue to excel in his future endeavors.`
    
    
    },
    
    {
    name : "Fairuz Maesha Habib",
    position : "Sr. Executive @Asiatic",
    img_url : "/assets/mo.png",
    stars : 5,
    disc : `
    I highly recommend Shahariar Rashid Fahim as an exceptional team member who consistently demonstrated strong dedication, creativity, and collaboration during our junior project design work. Fahim's unwavering commitment to our project, along with his insightful contributions, greatly contributed to our team's success. His strong work ethic, attention to detail, and excellent problem-solving skills were evident throughout our project, making him a valuable asset to any future team or endeavor. I have no doubt that Fahim will continue to excel in his academic and professional pursuits.`


},
{
    name : "Md Moniruzzaman",
    position : "Software QA Engineer",
    img_url : "/assets/fi.png",
    stars : 5,
    disc : `I am delighted to provide a recommendation for Shahariar Rashid Fahim, who was my teammate on a software project. Fahim's contribution to our project was invaluable. His technical expertise, strong problem-solving skills, and dedication were evident in his work. He consistently demonstrated an ability to grasp complex concepts quickly and find effective solutions. Moreover, Fahim's excellent communication and collaboration skills greatly facilitated our teamwork. He was not only a reliable and proactive team member but also a supportive and approachable colleague, making the project a rewarding experience. I am confident that Fahim's skills and work ethic will make him an asset to any software development team or project in the future.`


},
]
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

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))

  return (
    <Container id='client'>
            
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
    </Container>
  )
}

export default Clients

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