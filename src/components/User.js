import React from 'react'

const User = ({name, email, position, phone, photo}) => {
    return (
        <div className={'user'}>
            <div className={'user-block'}>
                <div className={'user-block__photo'}>
                    <img src={photo}/>
                </div>
                <div className={`title-h2 user-block__name ${name.length > 13 && name.substring(0, 13).split('').lastIndexOf(' ') < 0 ? 'tooltip' 
                    : name.length > 25 ? 'tooltip' 
                        : undefined}`}>
                    {name.length > 13 && name.substring(0, 13).split('').lastIndexOf(' ') < 0 ? `${name.substring(0, 13)}...`
                        : name.length > 25 ? `${name.substring(0, 25)}...`
                            : name}
                    <div className={'tooltip__content'}>{name}</div>
                </div>
                <div className={'user-block__position text'}>
                    {position}
                </div>
                <div className={`text user-block__email ${email.length > 24 && 'tooltip'}`}>
                    {email.length > 24 ? `${email.substring(0, 24)}...`
                            : email}
                    <div className={'tooltip__content'}>{email}</div>
                </div>
                <div className={'user-block__phone text'}>
                    {phone}
                </div>
            </div>
        </div>
    );
}

export default User