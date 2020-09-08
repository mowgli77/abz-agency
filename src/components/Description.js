import React from 'react'
import manLaptop from '../images/man-laptop-v1.svg'
import {NavLink, withRouter} from "react-router-dom"

const Description = () => {
    return (
        <div className={'description'}>
            <div className={'description__content'}>
                <div className={'description__title title-h1'}>
                    Let's get acquainted
                </div>
                <div className={'description__block'}>
                    <div className={'block-img'}>
                        <img src={manLaptop}/>
                    </div>
                    <div className={'block-column'}>
                        <div className={'block-column__title title-h2'}>
                            I am cool frontend developer
                        </div>
                        <div className={'block-column__text text'}>
                            We will evaluete how clean your approach to writing CSS and javascript code is.
                            You can use any CSS and javascript 3rd party libraries without any restriction.
                        </div>
                        <div className={'block-column__text text'}>
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will
                            get
                            bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well.
                            Slice service directory page PSD mockup into HTML5/CSS3.
                        </div>
                        <NavLink exact to={'/sign#up'} activeClassName={'block-column__link-active'}>Sign up
                            now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Description)