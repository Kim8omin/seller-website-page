import React from 'react';
import styled from 'styled-components';
import section1_blue from '../../assets/section1_blue.png'

const About = () => {
    return (
        <Wrapper>
            <img src={section1_blue} alt='about' width='100%'/>
        </Wrapper>
    );
};

export default About;


const Wrapper = styled.div`

`;