import styled from "styled-components";
import {ImPriceTag} from 'react-icons/im';
import {BsFillChatDotsFill} from 'react-icons/bs';
import { ProgressBar } from "react-bootstrap";
import {FaDesktop} from 'react-icons/fa';
import SliderComp from "./components/Projects/Slider";
import SliderCertificates from "./certificates/SliderCertificates";
function App() {
  return (
    <>
    <div data-spy="scroll" data-target="#navbar-collapse-toggle" data-offset="70">
    <header>
        <nav className="navbar header-nav header-white navbar-expand-lg">
            <div className="container">
              
                <a className="navbar-brand" href="index-2.html">Shahariar Rashid fahim <span className="theme-bg"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
             
                <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
                    <ul className="navbar-nav ml-auto">
                        <li><a className="nav-link active" href="#home">Home</a></li>
                        <li><a className="nav-link" href="#about">About Us</a></li>
                        <li><a className="nav-link" href="#services">services</a></li>
                        <li><a className="nav-link" href="#work">Portfolio</a></li>
                        <li><a className="nav-link" href="#blog">Blog</a></li>
                        <li><a className="nav-link" href="#contactus">Contact</a></li>
                    </ul>
                </div>
             
            </div>
        </nav> 
    </header>
  
    <main>
       
        <section id="home" className="home-banner-02 bg-cover bg-center bg-no-repeat" style = {{backgroundImage: 'url(./img/banner.png)'}} >
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
        <section id="about" className="section gray-bg">
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
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 m-15px-tb">
                        <div className="about-me">
                            <h4>I'M Shahariar Rashid Fahim</h4>
                            <h6>A Professional <span className="theme-color">Salesforce admin & project manager</span> based in <span className="theme-color">Bangladesh</span></h6>
                            <p>Welcome to my domain of Salesforce excellence! I'm Shahariar Rashid Fahim, a seasoned Salesforce admin and adept project manager. With a passion for precision and a track record of successful CRM implementations, I'm here to propel your business to new heights. Explore how I can optimize your Salesforce journey today!</p>
                            <div className="row about-list">
                                <div className="col-md-6">
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
                                <a className="m-btn m-btn-theme" href="#work">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    
        <section className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Skills</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-6 m-15px-tb">
                        <div className="skill-lt">
                            <h6 className="dark-color">HTML5</h6>
                            <ProgressBar now={90} bar className="progressbar" variant="bg-progressbar" animated={true} label="90%"></ProgressBar>
                            {/* <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                                    <span>92%</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">WordPress</h6>
                            <ProgressBar now={90} bar className="progressbar" variant="bg-progressbar" animated={true} label="90%"></ProgressBar>
                            {/* <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                    <span>75%</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">Magento</h6>
                            <ProgressBar now={90} bar className="progressbar" variant="bg-progressbar" animated={true} label="90%"></ProgressBar>
                            {/* <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                                    <span>86%</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="skill-lt">
                            <h6 className="dark-color">UI/UX</h6>
                            <ProgressBar now={90} bar className="progressbar" variant="bg-progressbar" animated={true} label="90%"></ProgressBar>
                        </div>
                      
                    </div>
                    <div className="col-lg-5 m-15px-tb">
                        <div className="row">
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-compact-disc"></i>
                                    </div>
                                    <div className="media-div">
                                        <h5>80 Albumes Listened</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-trophy"></i>
                                    </div>
                                    <div className="media-div">
                                        <h5>15 Awards Won</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-mug-hot"></i>
                                    </div>
                                    <div className="media-div">
                                        <h5>1 000 Cups of coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        <i className="fas fa-flag"></i>
                                    </div>
                                    <div className="media-div">
                                        <h5>10 Countries Visited</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section id="services" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Services</h3>
                            <p className="text-uppercase small">A Lead UX & UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                  
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <FaDesktop></FaDesktop>
                            </div>
                            <div className="feature-content">
                                <h5>Unique design</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <ImPriceTag></ImPriceTag>
                            </div>
                            <div className="feature-content">
                                <h5>Different Layout</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                <BsFillChatDotsFill></BsFillChatDotsFill>
                            </div>
                            <div className="feature-content">
                                <h5>Make it Simple</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                            <FaDesktop></FaDesktop>
                            </div>
                            <div className="feature-content">
                                <h5>Responsiveness</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                            <ImPriceTag></ImPriceTag>
                            </div>
                            <div className="feature-content">
                                <h5>Testing for Perfection</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                            <BsFillChatDotsFill></BsFillChatDotsFill>
                            </div>
                            <div className="feature-content">
                                <h5>Advanced Options</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
       
        <section id="work" className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <SliderComp></SliderComp>
            </div>
        </section>
       
        <section className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Achivements</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src="./img/certificate.jpg" title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src="./img/certificate.jpg" title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar 2019</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src="./img/certificate.jpg" title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar 2019</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="contactus" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Get in touch</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                </div>
              
                <div className="row justify-content-center">
                    <div className="col-lg-8 m-15px-tb">
                        <div className="contact-form box-shadow">
                            <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
                            <form id="contact-form" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text"/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" placeholder="Your message *" rows="3" className="form-control"></textarea>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="m-btn m-btn-theme" onclick="send_mail()" type="button" value="Send"> send message</button>
                                        </div>
                                        <span id="suce_message" className="text-success" style={{display: "none"}}>Message Sent Successfully</span>
                                        <span id="err_message" className="text-danger" style={{display: "none"}}>Message Sending Failed</span>
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
                                <h6 className="dark-color font-alt">Our Address</h6>
                                <p>123 Stree New York City , United States Of America 750065.</p>
                            </div>
                        </div>
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                <i className="ti-mobile"></i>
                            </div>
                            <div className="media-div">
                                <h6 className="dark-color font-alt">Our Phone</h6>
                                <p>Office: +004 44444 44444<br/>
                                    Office: +004 44444 44444<br/></p>
                            </div>
                        </div>
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="media-div">
                                <h6 className="dark-color font-alt">Our Email</h6>
                                <p>info@domainname.com<br/>contact@domainname.com</p>
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
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div className="col-md-6 m-10px-tb text-center text-md-right">
                    <p>© 2019 copyright all right reserved</p>
                </div>
            </div>
        </div>
    </footer>
   
    <script src="static/js/jquery-3.2.1.min.js"></script>
    <script src="static/js/jquery-migrate-3.0.0.min.js"></script>
  
    <script src="static/plugin/appear/jquery.appear.js"></script>
   
    <script src="static/plugin/bootstrap/js/popper.min.js"></script>
    <script src="static/plugin/bootstrap/js/bootstrap.js"></script>
   
    <script src="static/js/custom.js"></script>
    <script src="static/js/mail_send.js"></script>

</div>
    </>
    // <Container>
    //   <Banner>
    //     <Header />
    //     <ProfComponent />
    //   </Banner>
    //   <Services />
    //   <LightColor>
    //     <Projects />
    //   </LightColor>
    //   <Clients />
    //   <LightColor>
    //     <Footer />
    //   </LightColor>
    // </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 80vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
