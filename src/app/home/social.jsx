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
        const cards = document.querySelectorAll('.fade-in');

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 }, // Initial state (invisible and slightly moved down)
                {
                    opacity: 1,
                    y: 0, // Final state (fully visible and in place)
                    duration: 1, // Animation duration
                    scrollTrigger: {
                        trigger: card, // Element that triggers the animation
                        start: 'top 80%', // Start animation when top of element reaches 80% of viewport
                        end: 'bottom 60%', // End animation when bottom of element reaches 60% of viewport
                        toggleActions: 'play none none reverse', // Play animation on enter, reverse on leave
                    },
                }
            );
        });

        const options = {
            strings: ['Art should comfort the disturbed and disturb the comfortable.', 'Welcome to the Next Screen!'], // 타이핑할 텍스트 배열
            typeSpeed: 50, // 타이핑 속도 (ms)
            backSpeed: 30, // 백스페이스 속도 (ms)
            loop: true, // 반복 여부
            backDelay: 1000, // 텍스트 삭제 후 대기 시간 (ms)
        };
        const typed = new Typed('.typed-element', options);

        return () => {
            clearTimeout(timer); // 타이머 정리
            typed.destroy(); // Typed.js 인스턴스 정리
        };
    }, []);

    return (
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
                                    <Text className="text-[1.5vw] text-white">{card.description}</Text>
                                    <Heading as="h1" className="typed-text">
                                        <span className="typed-element text-[1.5vw]"></span>
                                    </Heading>
                                </Box>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            </div>
        </div>
    );
};

export default Social;
