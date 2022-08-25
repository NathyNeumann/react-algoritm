import React from 'react';
type ResultProps = {
    result: string | number;
    complementText?: string;
}
const Result = (props: ResultProps) => {
    return (
        props.complementText && props.result ?
            <p>{props.result + props.complementText}</p> :
            <p>{props.result}</p>
    )
}
export default Result;