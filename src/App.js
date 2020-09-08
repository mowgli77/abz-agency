import React from 'react'
import './App.css'
import {Banner, Description, Footer, Header, RegistrationContainer, Users} from './components'

const App = () => {



    return (
        <div className={'container'}>
            <Header />
            <Banner />
            <Description />
            <Users />
            <RegistrationContainer />
            <Footer />
        </div>
    );
}

export default App
