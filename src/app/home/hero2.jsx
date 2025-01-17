import { Image } from '@chakra-ui/next-js';
import { AspectRatio, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Hero2 = () => {
    const [showImage, setShowImage] = useState(false); // 이미지 표시 여부 상태
    const [backgroundDimmed, setBackgroundDimmed] = useState(false); // 배경 밝기 전환 상태

    useEffect(() => {
        // Heading이 등장한 후 2초 뒤에 이미지 표시 및 배경 밝기 전환
        const timer1 = setTimeout(() => {
            setShowImage(true);
            setBackgroundDimmed(true);
        }, 2000);

        // 타이머 정리
        return () => clearTimeout(timer1);
    }, []);

    return (
        <>
            <style>
                {`
             
          .main__container {
            position: relative;
            height: 100vh; /* 컨테이너 전체 높이 */
            width:100vw;
          }

          .background-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 1); /* 초기 완전 검정색 */
            transition: background-color 1.5s ease-in-out; /* 배경 밝기 전환 애니메이션 */
            z-index: 1; /* 글씨 아래, 이미지 위 */
          }

          .dimmed-background {
            background-color: rgba(0, 0, 0, 0.7); /* 밝아진 검정색 (30% 밝기) */
          }

          .main__title {
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0;
            color: white; /* 글씨는 항상 흰색 유지 */
            animation: fadeInTitle 2s ease forwards;
            font-size : 20vh;
            text-align :center;
            z-index: 2; /* 배경 위에 위치 */
   
          }

          .main__image-wrapper {
            position: relative;
            z-index: 0; /* 배경 아래에 위치 */
            height : 100vh;
          }

          .main__image {
 position: absolute;
            top: 0;
            left: 0;
            width: 100%; /* 화면 너비를 채움 */
            height: 100%; /* 화면 높이를 채움 */
            object-fit: cover; /* 비율을 유지하며 화면을 꽉 채움 */
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          }

          .main__image.visible {
            opacity: 1; /* 보이게 설정 */
          }

          @keyframes fadeInTitle {
            from {
              opacity: 0;
              transform: translate(-50%, -50%);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        `}
            </style>

            <div className=" relative main__container">
                {/* Image */}
                <div className="main__image-wrapper">
                    <Image
                        src="/images/pattern/main/main__img.jpg"
                        alt="Main Image"
                        width={1300}
                        height={1300}
                        className={`main__image ${showImage ? 'visible' : ''}`} // 상태에 따라 클래스 추가
                    />
                </div>

                {/* Background Layer */}
                <div className={`background-layer ${backgroundDimmed ? 'dimmed-background' : ''}`}></div>

                {/* Heading */}
                <Heading className="main__title">We Are All Banksy.</Heading>
            </div>
        </>
    );
};

export default Hero2;
