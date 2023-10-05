import { Container } from "react-bootstrap";
import styled from "styled-components";

const Certificates = (props) => {
    const {name, desc, img} = props.item
    return (
        <Container>
             <div className="container">
                <div className="row">
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src={img} title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar 2019</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">{name}</a></h5>
                                <p>{desc}</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </Container>
    );
}
export default Certificates;
