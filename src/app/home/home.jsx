import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Hero from './hero';
import Bento from './bento';
import Hero2 from './hero2';
import WhoisBanksy from './whoisBanksy';
import ListSwiper from '@/components/list/ListSwiper';
import App from './img_button/page';
import Img from './img';
import Gsapgg from './gsapgg';

const Home = () => {
    return (
        <div className="flex flex-col ">
            <Hero2 />
            <WhoisBanksy />

            {/* <Hero /> */}
            <Img />

            <App />
            <IntroSwiper />
            <ListSwiper />
            <News mockNews={mockNews} title="뉴스" />
            <Gsapgg />
        </div>
    );
};

export default Home;
