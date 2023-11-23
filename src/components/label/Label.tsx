import React from 'react';
import styled from "styled-components";

type Props = {
    text: string;
    color?: string;
    fontSize?: string;
}

export default function Label({
    text,
    color='black',
    fontSize='1rem'
}: Props) {
    return (
        <SLabel $color={color} $fontSize={fontSize}>{text}</SLabel>
    );
}

const SLabel = styled.label<{$color: string, $fontSize: string}>`
    color: ${({$color}) => $color};
    font-size: ${({$fontSize}) => $fontSize};
    font-weight: 600;
`

