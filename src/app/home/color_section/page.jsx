import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/app/home/color_section/section.css'; // Ensure styles are imported

gsap.registerPlugin(ScrollTrigger);

const ColorSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const sections = containerRef.current.querySelectorAll('section');

        const tl = gsap.timeline();
        tl.from(sections[0], { xPercent: -100 })
            .from(sections[1], { xPercent: 100 })
            .from(sections[2], { yPercent: 100 });

        ScrollTrigger.create({
            animation: tl,
            trigger: containerRef.current,
            start: 'top top',
            end: '+=4000',
            pin: true,
            scrub: true,
            anticipatePin: 1,
        });
        return () => {
            // 언마운트 시 정리
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div>
            <div className="section01"></div>
            <div id="container" ref={containerRef}>
                <section className="section02"></section>
                <section className="section03"></section>
                <section className="section04"></section>
                <section className="section05"></section>
            </div>
        </div>
    );
};

export default ColorSection;
