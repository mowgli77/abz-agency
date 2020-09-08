import React, {useEffect} from 'react'
import {Modal, RegistrationForm} from '../components'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {compose} from "redux";
import {registerThunk, setOpenErrorModal, setOpenRegisterModal} from "../redux/actions";

const RegistrationContainer = ({registerThunk, isDisabled, submitSucceeded, isOpenRegisterModal, setOpenRegisterModal, error, setOpenErrorModal, ...props}) => {

    useEffect(() => {
        const hash = props.history.location.hash
        if (hash && document.getElementById(hash.substr(1))) {
            document.getElementById(hash.substr(1)).scrollIntoView({behavior: "auto"})
            setTimeout(() => window.addEventListener('scroll', listenScrollRegisterEvent), 300)
        }
    }, [props.history.location.hash])

    const listenScrollRegisterEvent = () => {
        const hash = props.history.location.hash
        if (hash && hash === '#up' && document.getElementById(hash.substr(1)) && window.scrollY <= 2000) {
            props.history.push('./')
            window.removeEventListener('scroll', listenScrollRegisterEvent)
        }
    }

    const registrationSubmit = (values) => {
        registerThunk(values)
    }

    return (
        <div className={'registration'} id={'up'} onScroll={listenScrollRegisterEvent}>
            {isOpenRegisterModal && <Modal onCancel={setOpenRegisterModal}
                                           title={'Congratulations'}
                                           buttonText={'Great'}
                                           text={'You have successfully passed the registration'}
            />}
            {error && <Modal onCancel={setOpenErrorModal}
                             title={'Error'}
                             buttonText={'Close'}
                             text={error}
            />}
            <div className={'registration__content'}>
                <div className={'registration__title title-h1'}>
                    Register to get a work
                </div>
                <div className={'registration__subtitle text'}>
                    Attention! After successful registration and alert, update the list of users in the block from
                    the
                    top
                </div>
                <RegistrationForm onSubmit={registrationSubmit} submitSucceeded={submitSucceeded}
                                  isDisabled={isDisabled}/>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isDisabled: state.users.isDisabled,
    submitSucceeded: state.users.submitSucceeded,
    isOpenRegisterModal: state.users.isOpenRegisterModal,
    error: state.users.error
})
export default compose(connect(mapStateToProps, {
    registerThunk,
    setOpenRegisterModal,
    setOpenErrorModal
}), withRouter)(RegistrationContainer)