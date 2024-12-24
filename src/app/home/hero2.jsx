import { Image } from '@chakra-ui/next-js';
import { AspectRatio, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Hero2 = () => {
    const [showImage, setShowImage] = useState(false); // 이미지 표시 여부 상태

    useEffect(() => {
        // Heading이 등장한 후 2초 뒤에 이미지 표시
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 2000);

        // 타이머 정리
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>
                {`
          .main__title {
            opacity: 0;
            animation: fadeInTitle 2s ease forwards;
          }

          .main__image {
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          }

          .main__image.visible {
            opacity: 1; /* 보이게 설정 */
          }

          @keyframes fadeInTitle {
            from {
              opacity: 0;
              transform: translateY(-20px); /* 위에서 아래로 이동 */
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
            </style>
            <div className="py-[100px] container relative">
                {/* Heading */}
                <Heading className="absolute z-10 text-[15vw] text-center main__title">We Are All Banksy.</Heading>

                {/* Image */}
                <AspectRatio ratio={2 / 1}>
                    <Image
                        src="/images/pattern/main/main__img.jpg"
                        alt="Main Image"
                        width={1300}
                        height={1300}
                        className={`main__image ${showImage ? 'visible' : ''}`} // 상태에 따라 클래스 추가
                    />
                </AspectRatio>
            </div>
        </>
    );
};

export default Hero2;
