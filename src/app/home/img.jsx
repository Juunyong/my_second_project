import { Image } from '@chakra-ui/next-js';
import React from 'react';

const Img = () => {
    return (
        <div className="container">
            <Image src="/images/pattern/main/banksy1.jpg" alt="banksy1" width={1300} height={1300}></Image>
        </div>
    );
};

export default Img;
