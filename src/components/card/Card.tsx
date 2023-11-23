import React from 'react';
import styled from 'styled-components';

type IconType = {
    path: string;
    bgColor: string;
}

type Props = {
    title: string;
    desc: string;
    icon: IconType
}

export default function Card({title, desc, icon}: Props) {
    const splitTitle = title.split(' ');
    return (
        <SCard>
            <IconBox $bgColor={icon.bgColor}>
                <img src={icon.path} alt="Card Icon" />
            </IconBox>
            <TDWrapper>
                <TitleBox>
                    {
                        splitTitle.map((title) => (
                            <p>{title}</p>
                        ))
                    }
                </TitleBox>
                <DescBox>
                    {desc}
                </DescBox>
            </TDWrapper>
        </SCard>
    );
}

const SCard = styled.div`
    width: 284px;
    height: 264px;
    padding: 32px;
    border: 2px solid #E8E8E8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const IconBox = styled.div<{$bgColor: string}>`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${({$bgColor}) => $bgColor};
    display: grid;
    place-items: center;
`

const TDWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const TitleBox = styled.div`
    width: 100%;
    height: auto;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`

const DescBox = styled.div`
    width: 100%;
    height: 100%;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
`

