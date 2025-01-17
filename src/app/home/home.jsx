import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Hero from './hero';
import Bento from './bento';
import Hero2 from './hero2';
import Social from './social';
import ListSwiper from '@/components/list/ListSwiper';
import App from './img_button/page';
import Img from './img';
import Gsap from './gsapgg';

const Home = () => {
    return (
        <div className="flex flex-col ">
            <Hero2 />
            <Social />

            {/* <Hero /> */}
            <Img />
            <Bento />
            <App />
            <IntroSwiper />
            <ListSwiper />
            <News mockNews={mockNews} title="뉴스" />
            <Gsap />
        </div>
    );
};

export default Home;
