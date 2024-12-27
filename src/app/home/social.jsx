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
        title: 'Who Is Banksy?',
        semiTitle: 'Art should comfort the disturbed and disturb the comfortable.',
        description: '예술은 불안한 자들을 편안하게 하고, 편안한 자들을 불안하게 해야 한다.',
        imageUrl: '/images/pattern/main/banksy_face.jpg',
    },
    {
        id: 2,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl: '/images/pattern/main/news2.webp',
    },
];
const Social = () => {
    return (
        <div className="bg-black/90 py-24 sm:py-32 ">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <SimpleGrid columns={{ base: 1, xl: 1 }} gap="3" mt={4}>
                    {cardData2.map((card) => (
                        <Card key={card.id} bgColor="gray.90">
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
                                    <Heading className="text-[7vw] text-yellow-300" size="xl" mb="2">
                                        {card.title}
                                    </Heading>
                                    <Text className="text-[1vw] text-yellow-400">{card.semiTitle}</Text>
                                    <Text className="text-[1vw] text-yellow-400">{card.description}</Text>
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
