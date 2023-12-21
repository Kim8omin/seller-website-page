import React from 'react';
import brochure from '../../src/assets/brochure.jpeg'
import styled from 'styled-components';
import MovingBar from '../components/main/movingBar';

const KBrochure = () => {
    return (

        <>
        <MovingBar/>
        <Brochure>
            <img src={brochure} alt='brochure_img'/>
        </Brochure>
        <MovingBar/>
        </>
        
    );
};

export default KBrochure;

const Brochure =styled.div`
margin: 0 auto;
display: flex;
`