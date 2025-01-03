import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    HStack,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typed from 'typed.js';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const cardData2 = [
    {
        id: 1,
        title: 'Who Is Banksy?',
        semiTitle: 'Art should comfort the disturbed and disturb the comfortable.',
        description: '예술은 불안한 자들을 편안하게 하고, 편안한 자들을 불안하게 해야 한다.',
        imageUrl: '/images/pattern/main/banksy_face.jpg',
    },
];

const Social = () => {
    const textRef = useRef(null);
    useEffect(() => {
        // GSAP ScrollTrigger 설정
        const cards = document.querySelectorAll('.fade-in');
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 }, // 초기 상태
                {
                    opacity: 1,
                    y: 0, // 최종 상태
                    duration: 1, // 애니메이션 지속 시간
                    scrollTrigger: {
                        trigger: card, // 트리거 요소
                        start: 'top 80%', // 뷰포트의 80% 지점에서 시작
                        end: 'bottom 60%', // 뷰포트의 60% 지점에서 끝남
                        toggleActions: 'play none none reverse', // 애니메이션 동작 설정
                    },
                }
            );
        });
        // Split the text into individual characters
        const split = new SplitType(textRef.current, { types: 'chars' });

        // Apply GSAP animation for glitch effect
        const glitchAnimation = () => {
            gsap.timeline({ repeat: -1, repeatDelay: 0.2 })
                .to('.char', {
                    x: () => gsap.utils.random(-2, 2), // 랜덤한 x축 이동
                    y: () => gsap.utils.random(-2, 2), // 랜덤한 y축 이동
                    color: '#ff0000', // 빨간색으로 순간적으로 변경
                    duration: 0.05,
                    stagger: 0.02,
                })
                .to('.char', {
                    x: 0,
                    y: 0,
                    color: '#00ff00', // 초록색으로 순간적으로 변경
                    duration: 0.05,
                    stagger: 0.02,
                })
                .to('.char', {
                    x: () => gsap.utils.random(-2, 2),
                    y: () => gsap.utils.random(-2, 2),
                    color: '#ffffff', // 원래 색상으로 복귀
                    duration: 0.05,
                    stagger: 0.02,
                });
        };

        glitchAnimation();

        // Typed.js 설정
        const options = {
            strings: [
                'Art should comfort the disturbed and disturb the comfortable.',
                '예술은 불안한 자들을 편안하게 하고, 편안한 자들을 불안하게 해야 한다.',
            ], // 타이핑할 텍스트 배열
            typeSpeed: 30, // 타이핑 속도 (ms)
            backSpeed: 30, // 백스페이스 속도 (ms)
            loop: true, // 반복 여부
            backDelay: 1000, // 텍스트 삭제 후 대기 시간 (ms)
        };
        const typed = new Typed('.typed-element', options);

        return () => {
            typed.destroy(); // Typed.js 인스턴스 정리
            timeline.kill();
            gsap.killTweensOf('.char');
            split.revert();
        };
    }, []);

    return (
        <>
            <style>
                {`
                .glitch-text {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  position: relative;
}

.char {
  display: inline-block;
}

/* 글리치 효과용 중첩 텍스트 */
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text); /* 동일한 텍스트 복제 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.glitch-text::before {
  color: #ff0000; /* 빨간색 */
  z-index: -1;
}

.glitch-text::after {
  color: #00ff00; /* 초록색 */
  z-index: -2;
}
                .fullscreen-video-container {
                    position: relative;
                    width: 100%;
                    height: 100vh; /* 화면 전체 높이 */
                    overflow: hidden;
                }

                .fullscreen-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* 비율을 유지하며 화면을 채움 */
                    z-index: -2; /* 콘텐츠 뒤로 이동 */
                }

                /* 비디오 어둡게 처리 */
                .video-overlay::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5); /* 어두운 오버레이 */
                    z-index: -1; /* 비디오 위에 표시되지만 콘텐츠 뒤로 이동 */
                }

                .content-overlay {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
 
                }

                .typed-text {
                color : white;
                    font-size: 1vw;
                    text-align: center;
                }
                `}
            </style>
            <div className="fullscreen-video-container video-overlay">
                {/* 비디오 배경 */}
                <video autoPlay muted loop className="fullscreen-video">
                    <source src="/videos/banksy_birmingham.mp4" type="video/mp4" />
                </video>

                {/* 콘텐츠 */}
                <div className="content-overlay">
                    {cardData2.map((card) => (
                        <Card key={card.id} bgColor="transparent" className="fade-in">
                            <CardBody>
                                <Heading className="py-20 text-[12vw] text-yellow-400" size="xl" mb="2">
                                    {card.title}
                                </Heading>
                                <Text className="text-[1vw] text-white">{card.semiTitle}</Text>
                                <Text className="text-[1.5vw] text-white">{card.description}</Text>
                                {/* Typed.js 텍스트 */}
                                <Heading className="typed-text">
                                    <span className="typed-element"></span>
                                </Heading>
                                <div ref={textRef} className="text-white glitch-text">
                                    지지직 효과!
                                </div>
                                ;
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Social;
