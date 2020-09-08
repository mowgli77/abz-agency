import React from 'react'

const RedButton = ({onClick, title, children, type, disabled}) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={'button'}>{title}{children}</button>
    );
}

export default RedButton