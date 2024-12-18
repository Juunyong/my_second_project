import { Image } from '@chakra-ui/next-js';
import { AspectRatio, Heading } from '@chakra-ui/react';
import React from 'react';

const Hero2 = () => {
    return (
        <div className="py-[100px] container">
            <Heading className="absolute m-auto z-10 text-[17vw] text-center">We Are All Banksy.</Heading>
            <AspectRatio ratio={2 / 1}>
                <Image src="/images/pattern/main/main__img.jpg" alt="dd" width={1300} height={1300} />
            </AspectRatio>
        </div>
    );
};

export default Hero2;
