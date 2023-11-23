import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

export default function CategoryList() {

    const CATEGORY_LIST = ['마이페이지', '법인 서비스', '개인 서비스']
    return (
        <CategoryWrapper>
            {
                CATEGORY_LIST.map((categoryName: string) => (
                    <CategoryItem categoryName={categoryName} />
                ))
            }
        </CategoryWrapper>
    );
}

const CategoryWrapper = styled.ul`
    display: flex;
    gap: 1rem;
`

