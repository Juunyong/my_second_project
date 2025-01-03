'use client';

import Header from '@/components/layout/header/Header';
import ListTail from '@/components/list/ListTail';
import { mockNews } from '@/data/newsData';
import { Container } from '@chakra-ui/react';
import React from 'react';

const NewsPage = () => {
    return (
        <>
            <Header className="color-black"></Header>
            <ListTail mockNews={mockNews} />
        </>
    );
};

export default NewsPage;
