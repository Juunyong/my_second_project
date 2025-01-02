import { Image } from '@chakra-ui/next-js';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const Img = () => {
    return (
        <div className="h-screen bg-black ">
            <Heading className="text-center text-[10vw] text-white">Imagination.</Heading>
            <div className="container flex flex-row gap-20 justify-center py-20">
                <Image src="/images/pattern/main/banksy1.jpg" alt="banksy1" width={400} height={400}></Image>
                <Image src="/images/pattern/main/banksy_parking.webp" alt="banksy2" width={400} height={400}></Image>
                <Image src="/images/pattern/main/flower_bomber.jpg" alt="banksy3" width={400} height={400}></Image>
            </div>
            <Heading className="text-center text-[2vw] text-white">
                Think outside the box, collapse the box, and take a fuxxing sharp knife to it.
            </Heading>
        </div>
    );
};

export default Img;
