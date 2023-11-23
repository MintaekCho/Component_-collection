import styled from 'styled-components';

type Props = {
    type?: 'main' | 'sub';
    text: string;
    textColor?: string;
}

export default function Title({type = 'main', text, textColor = 'black'}: Props) {

    switch(type) {
        case 'main': {
            return <MainTitle $color={textColor}>{text}</MainTitle>
        }
        case 'sub': {
            return <SubTitle $color={textColor}>{text}</SubTitle>
        }
        default: return null;
    }
}

const MainTitle = styled.h1<{$color: string}>`
    color: ${({$color}) => $color};
`

const SubTitle = styled.h2<{$color: string}>`
    color: ${({$color}) => $color};
`

