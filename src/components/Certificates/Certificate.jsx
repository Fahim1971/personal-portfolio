import React from 'react';
import styled from 'styled-components';

const Certificate = ({item}) => {
    console.log(item)
    return(
        <Container>
        <div className="m-15px-tb">
        <div className="blog-grid">
        <div className="blog-grid-img">
        <a href=" ">
             <img src={item.img} title="" alt=""/>
        </a>
                               
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date"> {item.date}</span>
                                    <span className="meta">Issued By</span>
                                </div>
                                <h5><a href=" ">{item.issued}</a></h5>
                                <p>{item.description}</p>
                              
                            </div>
                        </div>             
        </div> 
        </Container>
    );
};
export default Certificate;


const Container = styled.div`
width: 100%;

img{
    width: 350px;
    height: 240px;
    object-fit: cover;
}

`