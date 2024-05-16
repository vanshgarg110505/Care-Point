import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import worktime from '../../assets/work-time.png'
import mailus from '../../assets/mail-us.png'
import callus from '../../assets/call-us.png'

const Navbar = () => {
  return (
    <>
    <nav>
        <div class="left-nav">
            <img class="logo" src={logo}/>
        </div>
        <div class="right-nav">
            <div class="sub-menu">
                <div>
                    <div class="icon">
                        <img src={worktime} alt=""/>
                    </div>
                    <div class="text">
                        <h4>WORK TIME: 09:00 - 17:00</h4>
                        <h4 class="sub-text space">Saturday and Sunday - CLOSED</h4>
                    </div>
                </div>
                <div>
                    <div class="icon">
                        <img src={mailus} alt=""/>
                    </div>
                    <div class="text">
                        <h4>MAIL US</h4>
                        <h4 class="sub-text space"><a href="mailto:free@psdfreebies.com">free@psdfreebies.com</a></h4>
                    </div>
                </div>
                <div>
                    <div class="icon">
                        <img src={callus} alt=""/>
                    </div>
                    <div class="text">
                        <h4>CALL US</h4>
                        <h4 class="sub-text"><a href="tel:+123 4567 8900">+123 4567 8900</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <img src="src/assets/rect.png" className='main-hr' />
    </div>
    <div className="menubar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
        <img src="src/assets/socialmedia.png" alt="" />
    </div>
    </>
  )
}

export default Navbar
