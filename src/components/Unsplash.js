import React from 'react';
import styled from 'styled-components';

const Img = styled.img`width:200px;`;

export const Unsplash=({url,key})=>{
    return (
        <Img src={url} key={key} alt=""/>
    );
}
