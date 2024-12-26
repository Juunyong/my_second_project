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
import React from 'react';

const cardData2 = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: '/images/pattern/main/news1.webp',
        badges: ['Hot', 'Caffeine'],
    },
    {
        id: 2,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: '/images/pattern/main/news2.webp',
        badges: ['Hot', 'Caffeine'],
    },
];
const Social = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32 ">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <SimpleGrid columns={{ base: 1, xl: 1 }} gap="3" mt={4}>
                    {cardData2.map((card) => (
                        <Card key={card.id} bgColor="gray.50">
                            <CardBody className="flex flex-col md:flex-row gap-4">
                                <Image
                                    className="w-1/3"
                                    objectFit="cover"
                                    width={1200}
                                    height={1200}
                                    src={card.imageUrl}
                                    alt={card.title}
                                />
                                <Box>
                                    <Heading size="xl" mb="2">
                                        {card.title}
                                    </Heading>
                                    <Text>{card.description}</Text>
                                    <HStack mt="4">
                                        {card.badges.map((badge, index) => (
                                            <Badge key={index}>{badge}</Badge>
                                        ))}
                                    </HStack>
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
