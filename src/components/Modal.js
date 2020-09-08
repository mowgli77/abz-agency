import React from 'react'

const Modal = ({title, buttonText, text, onCancel}) => {

    return (
        <div className={'modal__overlay'}>
            <div className={'modal__window'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>
                        {title}
                        <span onClick={() => onCancel(false)}>&times;</span>
                    </div>
                </div>
                <div className={'modal__body'}>
                    {text}
                </div>
                <div className={'modal__footer'}>
                    <button onClick={() => onCancel(false)}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal