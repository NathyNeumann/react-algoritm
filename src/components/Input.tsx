import React from 'react';
type InputProps = {
    type: React.HTMLInputTypeAttribute;
    handleChange: (e: any) => void;
    minValue?: number;
    ref?: any;
}
const Input = (props: InputProps) => {

    return (
        <>
            <input type={props.type} onChange={(e: any) => props.handleChange(e.target.value)} min={props.minValue} />
        </>
    )
}
export default Input;