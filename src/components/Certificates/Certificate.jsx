import React from 'react';
import styled from 'styled-components';

const Certificate = ({item}) => {
    console.log(item)
    return(
        <Container>
        <div className="m-15px-tb">
        <div className="blog-grid">
        <div className="blog-grid-img">
        <a href="#">
             <img src={item.img} title="" alt=""/>
        </a>
                               
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date"> {item.date}</span>
                                    <span className="meta">Issued By</span>
                                </div>
                                <h5><a href="#">{item.issued}</a></h5>
                                <p>Salesforce Admin certification, I learned to effectively manage and configure Salesforce to optimize business processes and maximize productivity.</p>
                              
                            </div>
                        </div>             
        </div> 
        </Container>
    );
};
export default Certificate;


const Container = styled.div`
width: 80%;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`