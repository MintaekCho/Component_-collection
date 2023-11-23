import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string;
    bgColor?: string;
    textColor?: string;
}

export default function Button({text, bgColor = 'inherit', textColor = 'black'}: Props) {
    return (
        <SButton $bgColor={bgColor} $textColor={textColor}>
            {text}
        </SButton>
    );
}

const SButton = styled.button<{$bgColor: string, $textColor: string}>`
    background-color: ${({$bgColor}) => $bgColor};
    color: ${({$textColor}) => $textColor};
    padding: 12px 16px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
`

