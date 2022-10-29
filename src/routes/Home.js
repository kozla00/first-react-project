import React from "react"
import Navbar from "../components/navbar/Navbar"
import Main from "../components/main/Main"
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Card />
            <Footer />
        </div>
    )
}

export default Home