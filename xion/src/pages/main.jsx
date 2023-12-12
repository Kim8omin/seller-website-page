import React from 'react';
import About from '../components/main/about';
import styled from 'styled-components';
import ContactComponent from '../components/main/contactCompo';
import Feature from '../components/main/feature';
import Fortpolio from '../components/main/fortpolio';

const Main = () => {
    return (
        <Wrapper>
            <About/>
            <Feature/>
            <ContactComponent/>
            <Fortpolio/>
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;