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
const cardObj = [
    {
        id: 1,
        title: 'Espresso Delight',
        description:
            'Espresso is a concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee beans.',
        imageUrl:
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        badges: ['Strong', 'Hot'],
        buttonText: 'Buy Espresso',
    },
    {
        id: 2,
        title: 'Iced Mocha Magic',
        description: 'Iced Mocha is a chilled blend of espresso, milk, and chocolate syrup, topped with whipped cream.',
        imageUrl:
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        badges: ['Cold', 'Sweet'],
        buttonText: 'Buy Iced Mocha',
    },
    {
        id: 3,
        title: 'Cappuccino Classic',
        description: 'Cappuccino is a coffee drink made with equal parts espresso, steamed milk, and milk foam.',
        imageUrl:
            'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Foamy'],
        buttonText: 'Buy Cappuccino',
    },
    {
        id: 4,
        title: 'Matcha Latte',
        description:
            'Matcha Latte combines finely ground green tea leaves with steamed milk for a creamy, antioxidant-rich drink.',
        imageUrl:
            'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        badges: ['Green Tea', 'Healthy'],
        buttonText: 'Buy Matcha Latte',
    },
];
const cardData2 = [
    {
        id: 1,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl:
            'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
    {
        id: 2,
        title: 'The perfect latte',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
        imageUrl:
            'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        badges: ['Hot', 'Caffeine'],
    },
];
const Social = () => {
    return (
        <Container>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="3">
                {cardObj.map((card, index) => (
                    <Card key={card.id} maxW="xl" bgColor="gray.100">
                        <CardBody className="flex flex-col gap-4">
                            <Image
                                className="aspect-square object-cover"
                                objectFit="cover"
                                width={1200}
                                height={1200}
                                src={card.imageUrl}
                                alt={card.title}
                            />
                            <Box>
                                <Heading size="md" mb="2">
                                    {card.title}
                                </Heading>
                                <Text>{card.description}</Text>
                                <HStack mt="4">
                                    {card.badges.map((badge, index) => (
                                        <Badge key={index} className="bg-white">
                                            {badge}
                                        </Badge>
                                    ))}
                                </HStack>
                            </Box>
                        </CardBody>
                        <CardFooter>
                            <Button>{card.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap="3" mt={4}>
                {cardData2.map((card) => (
                    <Card key={card.id} bgColor="gray.100">
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
                                <Heading size="md" mb="2">
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
        </Container>
    );
};

export default Social;
