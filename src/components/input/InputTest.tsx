import React, { useState } from 'react';
import Input from './Input';

export default function InputTest() {
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setText(value)
    }
    return (
        <>
            <Input text={text} placeHolder="여기에 입력해주세요" onChange={(e) => handleChange(e)} />
        </>
    );
}

