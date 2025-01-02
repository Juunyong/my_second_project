import { Image } from '@chakra-ui/next-js';
import React from 'react';

const Img = () => {
    return (
        <div className="h-screen bg-black ">
            <div className="container flex flex-row gap-20 justify-center">
                <Image src="/images/pattern/main/banksy1.jpg" alt="banksy1" width={500} height={500}></Image>
                <Image src="/images/pattern/main/banksy2.jfif" alt="banksy1" width={500} height={500}></Image>
                <Image src="/images/pattern/main/banksy4.jfif" alt="banksy1" width={500} height={500}></Image>
            </div>
        </div>
    );
};

export default Img;
