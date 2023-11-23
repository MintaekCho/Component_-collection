import React from 'react';
import styled from 'styled-components';

type Props = {
    categoryName: string;
}

export default function CategoryItem({categoryName}: Props) {
    return (
        <SCategoryItem>
            {categoryName}
        </SCategoryItem>
    );
}

const SCategoryItem = styled.li`
    padding: 8px;
    color: #1A191E;
    font-weight: 600;
    cursor: pointer;
`

