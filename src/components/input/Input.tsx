import React from "react";
import styled from "styled-components";

type Props = {
  type?: 'text' | 'textarea';
  text: string;
  placeHolder: string;
  textColor?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Input({
  type='text',
  text,
  placeHolder,
  textColor = 'black',
  rows = 10,
  onChange,
}: Props) {
  return (
    <>
      {
        type === 'textarea' 
        ?
        <STextarea rows={rows} value={text} placeholder={placeHolder} onChange={(e) => onChange(e)} $textColor={textColor} />
        :
        <SInput type={type} value={text} placeholder={placeHolder} onChange={(e) => onChange(e)} $textColor={textColor} />

      }
    </>
  )
}

const SInput = styled.input<{$textColor: string}>`
  padding: 8px 12px;
  color: ${({$textColor}) => $textColor};
`

const STextarea = styled.textarea<{$textColor: string}>`
  padding: 8px 12px;
  color: ${({$textColor}) => $textColor};
`
