import React from 'react'
import { gsap } from 'gsap';
import './MainPage.css'

const MainPage = () => {
    let timeline= gsap.timeline();
    // timeline.to()
    return (
        <>
            <nav className='hide'>
                <img src="../../../public/img/signature.png" alt="" className='signature' />
                <ul>
                    <li className="nav-link">
                        <a href="#">Work<i class='bx bx-chevron-down'></i></a>
                    </li>
                    <li className="nav-link">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="image-wrap"></div>
            <h1 className='big-name'>Travel<br />Agency</h1>
            <span className="scroll hide">Scroll Down</span>
            <span className="line hide"></span>
            <div className='bottom-section hide'>
                <p>                                                                    {/*TRANSFORMAR A SPAN! */}
                    <i class='bx bx-map' ></i> Located in England
                </p>
                <ul className="social-media">
                    <li>
                        <a href="#">
                            <i class='bx bxl-instagram' ></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxl-linkedin' ></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxl-twitter' ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainPage