import React, {useEffect} from 'react'
import {RedButton, User} from '../components'
import {connect} from 'react-redux'
import {getMoreUsersThunk, getUsersThunk, setCurrentPage} from '../redux/actions'
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const Users = ({getUsersThunk, getMoreUsersThunk, setCurrentPage, users, total_users, currentPage, pageSize, isDisabled, ...props}) => {

    useEffect(() => {
        getUsersThunk()
    }, [])

    useEffect(() => {
        const hash = props.history.location.hash
        if (hash && hash === '#users' && document.getElementById(hash.substr(1))) {
            document.getElementById(hash.substr(1)).scrollIntoView({behavior: "auto"})
            setTimeout(() => window.addEventListener('scroll', listenScrollUsersEvent), 300)
        }
    }, [props.history.location.hash])

    const listenScrollUsersEvent = () => {
        const hash = props.history.location.hash
        if (hash && hash === '#users' && document.getElementById(hash.substr(1)) && window.scrollY <= 1000) {
            props.history.push('./')
            window.removeEventListener('scroll', listenScrollUsersEvent)
        } else if (hash && hash === '#users' && document.getElementById(hash.substr(1)) && window.scrollY >= 2000) {
            props.history.push('./')
            window.removeEventListener('scroll', listenScrollUsersEvent)
        }
    }

    const showMoreUsers = () => {
        getMoreUsersThunk(currentPage + 1, pageSize)
        setCurrentPage(currentPage + 1)
    }
    const hideMoreUsers = () => {
        getUsersThunk()
        setCurrentPage(1)
    }


    return (
        <div className={'users'} id={'users'} onScroll={listenScrollUsersEvent}>
            <div className={'users__content'}>
                <div className={'users__title title-h1'}>
                    Our cheerful users
                </div>
                <div className={'users__subtitle text'}>
                    Attention! Sorting users by registration date
                </div>
                <div className={'users__list'}>
                        {users.map(u => <User {...u} key={u.id}/>)}
                </div>
                <div className={'users__button'}>
                    {(currentPage*pageSize >= total_users) ?
                        <RedButton title={'Hide more'} onClick={hideMoreUsers} disabled={isDisabled} /> :
                        <RedButton title={'Show more'} onClick={showMoreUsers} disabled={isDisabled} /> }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    total_users: state.users.total_users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    isDisabled: state.users.isDisabled
})

export default compose(withRouter,
    connect(mapStateToProps, {getUsersThunk, getMoreUsersThunk, setCurrentPage}))(Users)