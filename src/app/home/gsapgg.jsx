import gsap from 'gsap';
import React from 'react';

const Gsapgg = () => {
    gsap.from('.line_div', {
        y: '100%',
        opacity: 1,
        duration: 0.3,
        ease: 'circ.out',
        stagger: 0.1,
    });

    return (
        <>
            <style>
                {`
                @import url(https://db.onlinewebfonts.com/c/384a6031928e262848e4e7ef80037466?family=Kudryashev+Display+Sans);
                .section_index_hello {
                position: relative;
    width: 100%;
    min-height: 102vh;
    background-color: #e9e8dd;
    transition: 0.6s ease-in-out background-color;
    overflow: hidden;

    line-height: 1.8;
    -webkit-font-smoothing: antialiased;}
                .inner {
                align-items : center;
                }
            .div_content {
                        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 72px;
    width: max-content;
            }
    .section_title {
    align-items: center;
    text-align: left;
    

    }
    .col { 
    display : flex;
    flex-direction : column;
    }
    .row {
    display : flex;
    flex-direction : row;
    align-items : baseline;
        max-width: max-content;
    gap: 16px;
    }
    span {
    translate: none;
    rotate: none;
    scale: none;
    transform: translate(0px, 0px);
    opacity: 1;
    }
    .bar_image {
    height: 4.35vw;
    width: auto;
    transform: translateY(0.7vw);
    }
    .txt-h4 {
    font-weight: 400;
    font-style: normal;
    font-size: 4.175vw;
    line-height: 1.2;
    letter-spacing: -0.05em;
            font-family: "Kudryashev Display Sans";
    }
    .line_div {
    padding: 0.3vw 0.2vw;
    margin: 0.3vw 0;  
    overflow : hidden; 
    }
            `}
            </style>
            <div className="section_index_hello">
                <div className="inner col">
                    <div className="div_content ">
                        <div className="section_title col txt-h4 ">
                            <div className="line_div">
                                <div className="row">
                                    <span>with a </span>
                                    <div className="bar_image">
                                        <img src="images/pattern/main/bar_img1.png" alt="" />
                                    </div>
                                    <span>three-dimensional space</span>
                                </div>
                            </div>
                            <div className="line_div">
                                <div className="row">
                                    <span>with a </span>
                                    <div className="bar_image">
                                        <img src="images/pattern/main/bar_img1.png" alt="" />
                                    </div>
                                    <span>three-dimensional space</span>
                                </div>
                            </div>
                            <div className="line_div">
                                <div className="row">
                                    <span>with a </span>
                                    <div className="bar_image">
                                        <img src="images/pattern/main/bar_img1.png" alt="" />
                                    </div>
                                    <span>three-dimensional space</span>
                                </div>
                            </div>
                            <div className="line_div">
                                <div className="row">
                                    <span>with a </span>
                                    <div className="bar_image">
                                        <img src="images/pattern/main/bar_img1.png" alt="" />
                                    </div>
                                    <span>three-dimensional space</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gsapgg;
