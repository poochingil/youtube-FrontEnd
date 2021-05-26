import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import "./MainPage.css"
export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="top">
            <Navbar/>
            </div>
            <div className="centre">
            <Sidebar/>
            <div className="videoview"> </div>
            </div>
            
        </div>
    )
}
