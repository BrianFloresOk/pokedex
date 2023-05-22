import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const ArrowContent = styled.div`
    margin: 28px 0px;
    width: 30px;
    height: 30px;
    position: relative;
    right: -86%;

    @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
    right: -92%;
    }
`
const FaArrowCircleUp2 = styled(FaArrowCircleUp)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: #c22a04;
`

export const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldShowButton = scrollTop > 200;
            setShowButton(shouldShowButton);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ArrowContent className={`scroll-to-top ${showButton ? 'show' : ''}`} onClick={handleScrollToTop}>
            <FaArrowCircleUp2></FaArrowCircleUp2>
        </ArrowContent>
    );
};