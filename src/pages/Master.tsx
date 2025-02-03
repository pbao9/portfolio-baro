import React from 'react'
import Footer from '../components/partials/Footer'
import Header from '../components/partials/Header'
import { Outlet } from 'react-router'

const Master = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Master
