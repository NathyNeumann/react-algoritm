import React from 'react';
type HeaderProps = {
    children: string;
    title: string;
}
const Header = (props: HeaderProps) => {
    return (
        <>
            <h1>{props.title}</h1>
            <div className="content">
                <p>{props.children}</p>
            </div>
        </>
    )
}
export default Header;