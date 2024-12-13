import React, { useState } from 'react';
import './App.css'; // CSS 파일에서 스타일 정의

function App() {
    // 이미지 상태 관리
    const [currentImage, setCurrentImage] = useState('image1.jpg');

    // 이미지 변경 함수
    const handleImageChange = (image) => {
        setCurrentImage(image);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* 동그란 이미지 */}
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src={currentImage} alt="Displayed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* 버튼 목록 */}
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => handleImageChange('image1.jpg')}>이미지 1</button>
                <button onClick={() => handleImageChange('image2.jpg')}>이미지 2</button>
                <button onClick={() => handleImageChange('image3.jpg')}>이미지 3</button>
            </div>
        </div>
    );
}

export default App;
