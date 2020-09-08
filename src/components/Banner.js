import React from 'react'
import {RedButton} from '../components'

const Banner = () => {

    return (
        <div className={'banner'}>
            <div className={'banner__content'}>
                <div className={'banner__title title-h1'}>
                    TEST ASSIGNMENT <br/> FOR FRONTEND DEVELOPER POSITION
                </div>
                <div className={'banner__text text'}>
                    We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                    repository.
                    <span>
                    Please be patient, we consider and respond to every application that meets minimum requirements.
                    We look forward to your submission. Good luck! The photo has to scale in the banner area on the
                    different screens.
                </span>
                </div>
                    <RedButton><a href={'#up'}>Sign up now</a></RedButton>
            </div>
        </div>
    );
}

export default Banner