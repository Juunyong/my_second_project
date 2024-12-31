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
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typed from 'typed.js';

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

        // Typed.js 설정
        const options = {
            strings: ['Art should comfort the disturbed and disturb the comfortable.', 'Welcome to the Next Screen!'], // 타이핑할 텍스트 배열
            typeSpeed: 50, // 타이핑 속도 (ms)
            backSpeed: 30, // 백스페이스 속도 (ms)
            loop: true, // 반복 여부
            backDelay: 1000, // 텍스트 삭제 후 대기 시간 (ms)
        };
        const typed = new Typed('.typed-element', options);

        return () => {
            typed.destroy(); // Typed.js 인스턴스 정리
        };
    }, []);

    return (
        <>
            <style>
                {`
                .typed-text {
                    font-size: 3rem;
                    text-align: center;
                    color : white;
                }
                `}
            </style>
            <div className="bg-black/90 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <SimpleGrid columns={{ base: 1, xl: 1 }} gap="3" mt={4}>
                        {cardData2.map((card) => (
                            <Card key={card.id} bgColor="gray.90" className="fade-in">
                                <CardBody className="flex flex-col md:flex-row gap-40">
                                    <Image
                                        className="w-1/3"
                                        objectFit="cover"
                                        width={1200}
                                        height={1200}
                                        src={card.imageUrl}
                                        alt={card.title}
                                    />
                                    <Box>
                                        <Heading className="text-[10vw] text-yellow-400" size="xl" mb="2">
                                            {card.title}
                                        </Heading>
                                        <Text className="text-[1.5vw] text-white">{card.semiTitle}</Text>
                                        <Text className="text-[1.5vw] text-white">{card.description}</Text>
                                        {/* Typed.js 텍스트 */}
                                        <Heading className="typed-text">
                                            <span className="typed-element"></span>
                                        </Heading>
                                    </Box>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>
            </div>
        </>
    );
};

export default Social;
