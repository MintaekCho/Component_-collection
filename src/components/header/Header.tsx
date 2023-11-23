import React from 'react';
import styled from 'styled-components';
import CategoryList from '../category/CategoryList';
import Title from '../title/Title';
import Button from '../button/Button';

export default function Header() {
    return (
        <Head>
            <Title text='Cread' textColor='#8A33E0' />
            <CategoryList />
            <LoginButtonWrapper>
                <Button text='로그인' textColor='#8A33E0' />
                <Button text='회원가입' textColor='white' bgColor='#8A33E0' />
            </LoginButtonWrapper>
        </Head>
    );
}

const Head = styled.header`
    width: 100%;
    height: auto;
    padding: 24px 0;
    background-color: #CCD6DD;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const LoginButtonWrapper = styled.div`
    display: flex;
    gap: 16px;
`

