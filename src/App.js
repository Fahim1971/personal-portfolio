import {BsFillChatDotsFill} from 'react-icons/bs';
import {  ProgressBar } from "react-bootstrap";
import {FaDesktop, FaSalesforce} from 'react-icons/fa';
import SliderComp from "./components/Projects/Slider";
import Clients from "./components/Clients/Clients";
import Achivements from "./components/Certificates/Achivements";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
function App() {
    const [alert, setAlert] = useState(0);
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nydntnb', 'template_ta5onf2', form.current, '3Wiqaw-8KVC3m2aZu')
          .then((result) => {
              console.log(result.text);
              setAlert(result.status)
              if(result.status === 200){
                setAlert(1)
                window.alert("Message Sending Successful")

              }
          }, (error) => {
              console.log(error.text);
          });
      };
      console.log((alert))
  return (
    <>
    <div data-spy="scroll" data-target="#navbar-collapse-toggle" data-offset="70">
    <header>
        <nav className="navbar header-nav header-white navbar-expand-lg bg-dark bg-opacity-10">
            <div className="container">
              
                <a className="navbar-brand" href="/">Shahariar Rashid fahim <span className="theme-bg"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
             
                <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                    <ul className="navbar-nav ml-auto">
                        <li><a className="nav-link active" href="#home">Home</a></li>
                        <li><a className="nav-link" href="#about">About Me</a></li>
                        <li><a className="nav-link" href="#services">services</a></li>
                        <li><a className="nav-link" href="#work">Portfolio</a></li>
                        <li><a className="nav-link" href="#contactus">Contact</a></li>
                    </ul>
                </div>
             
            </div>
        </nav> 
        
    </header>
  
    <main>
       
        <section id="home" className="home-banner-02 img-fluid bg-cover bg-left-bottom bg-no-repeat custom_bg" style = {{backgroundImage: 'url(./img/banner.png)'}} >
            <div className="container">
                <div className="row full-screen align-items-center p-100px-tb">
                    <div className="col-12">
                        <div className="ht-text text-center">
                            <h6>Hello There!</h6>
                            <h1>I'm Shahariar Rashid Fahim</h1>
                            <div className="nav ht-list justify-content-center"><span>Salesforce Administrator</span> <span>Project Manager</span> <span>web developer</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="go-to go-to-next">
                <a href="#about">
                    <span></span>
                </a>
            </div>
        </section>
        <section id="about" className="section gray-bg text-dark">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">ABOUT ME</h3>
                            <p className="text-uppercase small">A passionate Salesforce administrator and project manager</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 m-15px-tb">
                        <div className="about-me-img box-shadow">
                            <img src="./img/banner2.png" title="" alt=""/>
                            <div className="nav social-icon">
                            <a href="https://www.linkedin.com/in/shahariarrashidfahim/"><i className="fab fa-linkedin-in"></i></a>
    
                                <a href="https://www.salesforce.com/trailblazer/shahariarrashid71"><i className="fab fa-salesforce"></i></a>
                                <a href="https://www.facebook.com/s.fahim71/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://github.com/Fahim1971"><i className="fab fa-git"></i></a>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 m-15px-tb justify_content">
                        <div className="about-me ">
                            <h4>I'M Shahariar Rashid Fahim</h4>
                            <h6>A Professional <span className="theme-color">Salesforce admin & project manager</span> based in <span className="theme-color">Bangladesh</span></h6>
                            <p>Welcome to my domain of Salesforce excellence! I'm Shahariar Rashid Fahim, a seasoned Salesforce admin and adept project manager. With a passion for precision and a track record of successful CRM implementations, I'm here to propel your business to new heights. Explore how I can optimize your Salesforce journey today!</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Education</label>
                                        <p>Bachelor of Science in Computer Science and engineering, North South University.</p>
                                    </div>
                                    <div className="media">
                                        <label>Email</label>
                                        <p>Shahariarrashidfahim@gmail.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>+880 1729 483512</p>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>Dhaka,Bangladesh</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                                
    
                                </div>
                            </div>
                            <div className="btn-bar">
                                <a className="m-btn m-btn-theme" href="https://drive.google.com/file/d/1ZdxEy0M2AhOI4Wp5CVZWzyyTFYDWbbwJ/view?usp=share_link">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    
        <section className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b justify_content text-dark">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Skills</h3>
                            <p className="text-uppercase small">Evolving Services with a Passion for Learning and Innovation</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-6 m-15px-tb">
                        <div className="skill-lt">
                            <h6 className="dark-color">Salesforce</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                        
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Project Management</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                        
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">HTML,CSS,JS and Bootstrap</h6>
                            <ProgressBar now={70} bar className="progressbar" variant="bg-progressbar" animated={true} label="70%"></ProgressBar>
                          
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">UI/UX</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Python and Django</h6>
                            <ProgressBar now={70} bar className="progressbar" variant="bg-progressbar" animated={true} label="70%"></ProgressBar>
                        </div>
                      
                    </div>
                    <div className="col-lg-6 m-15px-tb">
                        <div className="skill-lt">
                            <h6 className="dark-color">SQL</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                          
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Jira,Trello</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Git</h6>
                            <ProgressBar now={60} bar className="progressbar" variant="bg-progressbar" animated={true} label="60%"></ProgressBar>
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Microsoft Office</h6>
                            <ProgressBar now={80} bar className="progressbar" variant="bg-progressbar" animated={true} label="80%"></ProgressBar>
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Postman</h6>
                            <ProgressBar now={60} bar className="progressbar" variant="bg-progressbar" animated={true} label="60%"></ProgressBar>
                        </div>
                      
                    </div>
                    
                </div>
            </div>
        </section>
       
        <section id="services" className="section gray-bg text-dark custom_space">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Services</h3>
                            <p className="text-uppercase small">Crafting Seamless Online Experiences and Salesforce Solutions for Your Success.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                  
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <FaSalesforce></FaSalesforce>
                            </div>
                            <div className="feature-content justify_content">
                                <h5>Salesforce Administration</h5>
                                <p>As a dedicated Salesforce Administrator, I specialize in providing expert services tailored to your organization's unique needs. With years of experience and in-depth knowledge of the Salesforce platform, I offer comprehensive support in configuring, customizing, and optimizing your Salesforce instance. From setting up automation workflows to managing user access and data integrity, I ensure that your Salesforce system operates efficiently and aligns perfectly with your business objectives. Trust me to empower your team with the tools they need to maximize productivity, gain valuable insights, and drive growth through Salesforce. Let's elevate your CRM experience together i am excited to work with you.</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <FaDesktop></FaDesktop>
                            </div>
                            <div className="feature-content justify_content">
                                <h5>Web Development</h5>
                                <p>As a skilled web developer, I'm here to transform your digital vision into a reality. I specialize in crafting responsive, user-friendly websites that not only look stunning but also perform seamlessly across devices. From elegant design to robust functionality, I have the expertise to create web solutions that meet your unique needs and objectives.

Whether you're looking to establish a captivating online presence, enhance e-commerce capabilities, or streamline your web applications, I bring creativity, technical proficiency, and attention to detail to every project. I'm committed to delivering websites that not only meet but exceed your expectations, ensuring your brand stands out in the digital landscape.</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <BsFillChatDotsFill></BsFillChatDotsFill>
                            </div>
                            <div className="feature-content justify_content">
                                <h5>Project Management</h5>
                                <p>As an experienced software project manager, I offer a dynamic blend of leadership, technical expertise, and strategic thinking to drive your software projects to success. I specialize in orchestrating end-to-end project lifecycles, from initial concept to delivery and beyond.

My services include meticulous project planning, resource allocation, risk management, and stakeholder communication to ensure projects stay on track and within budget. I excel in fostering collaboration among cross-functional teams, optimizing workflows, and ensuring that the software aligns perfectly with your business objectives.Let's work together to turn your software ideas into reality while mitigating risks and maximizing project outcomes.</p>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </section>

        <section id="work" className="section text-dark">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
                            <p className="text-uppercase small">I'm happy to share my latest Salesforce and software projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container custom_text">
                <SliderComp></SliderComp>
            </div>
        </section>
       
       

        
        <section className="section gray-bg text-dark">
            <Achivements></Achivements>
        </section>
        <section className="section">
        <div className="container text-dark">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Testimonial</h3>
                            <p className="text-uppercase small">Few words from my colleagues</p>
                        </div>
                    </div>
                </div>
            </div>
        <Clients></Clients>
        </section>


        <section className="section gray-bg text-dark justify_content">
            <div className="container">
            <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className=" custom_pub">
                            <div className="section-title custom_div">
                            <h3 className="text-uppercase custom_pub">International Publication</h3>
                            <p className="text-uppercase small">Paper's name : Eye Assistant ,Using mobile application to help the visually impaired</p>
                            <p className="text-uppercase small">Publisher : IEEE </p>
                            <a className="" href="https://ieeexplore.ieee.org/document/8934448?fbclid=IwAR3by8CvZyO0ClTIole21AwXm1R42yFkCE2gd3BRIAjdOWzzD0Mm2tRBlgE">website link</a>
                            <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href=" ">
                                    <img src="./img/con.png" title="" alt=""/>
                                </a>
                            </div>
                         
                        </div>
                            </div>
                            
                
                        </div>
                    </div>
                </div>
            </div>
       
        </section>
        <section id="contactus" className="section gray-bg text-dark">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Get in touch</h3>
                            <p className="text-uppercase small">I am ready to help you out.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 m-15px-tb">
                        <div className="contact-form box-shadow">
                            <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
                            <form ref={form}  id="contact-form" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="subject" id="subject" placeholder="Subject *" className="form-control" type="text"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" placeholder="Your message *" rows="3" className="form-control"></textarea>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div>
                                    {alert === 1? <span id="suce_message" className="text-success" style={{display: "none"}}>Message Sending Successfull</span>:
                                        <p id="err_message" className="text-danger" style={{display: "none"}}>Message Sending Failed</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button onClick={sendEmail} className="m-btn m-btn-theme"  type="submit" value="send"> send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> 
                    <div className="col-lg-4 m-15px-tb">
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                <i className="ti-location-pin"></i>
                            </div>
                            <div className="media-div">
                                <h6 className="dark-color font-alt">My Address</h6>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                <i className="ti-mobile"></i>
                            </div>
                            <div className="media-div">
                                <h6 className="dark-color font-alt">My Phone</h6>
                                <p>+880 1729 483512
                                    </p>
                            </div>
                        </div>
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="media-div">
                                <h6 className="dark-color font-alt">My Email</h6>
                                <p>Shahariarrashidfahim@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        
    </main>
   
    <footer className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 m-10px-tb">
                    <div className="nav justify-content-center justify-content-md-start">
                        <a href="https://www.linkedin.com/in/shahariarrashidfahim/"><i className="fab fa-facebook-f"></i></a>
                      
                       
                        <a href="https://www.linkedin.com/in/shahariarrashidfahim/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Fahim1971"><i className="fab fa-git"></i></a>
                    </div>
                </div>
                <div className="col-md-6 m-10px-tb text-center text-md-right">
                    <p>©2023 copyright reserved for Shahariar Rashid Fahim</p>
                </div>
            </div>
        </div>
    </footer>
   
    {/* <script src="static/js/jquery-3.2.1.min.js"></script>
    <script src="static/js/jquery-migrate-3.0.0.min.js"></script>
  
    <script src="static/plugin/appear/jquery.appear.js"></script> */}
   
    <script src="static/plugin/bootstrap/js/popper.min.js"></script>
    <script src="static/plugin/bootstrap/js/bootstrap.js"></script>
   
    <script src="static/js/custom.js"></script>
    <script src="static/js/mail_send.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
</div>
    </>

  );
}

export default App;
