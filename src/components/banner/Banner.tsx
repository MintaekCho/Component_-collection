import React from 'react';
import styled from 'styled-components';

export default function Banner() {
    return (
        <SBanner>
            <BannerTextWrapper>
                <p>포용금융을 실현하는</p>
                <p>핀테크 플랫폼!</p>
            </BannerTextWrapper>
        </SBanner>
    );
}

const SBanner = styled.div`
    width: 100%;
    height: auto;
    padding: 128px 0px;
    margin-left: 167.5px;
`

const BannerTextWrapper = styled.div`
    font-size: 100px;
    font-style: normal;
    font-weight: bold;
`

