import React, { useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from 'gsap';
import './MainPage.css';

const MainPage = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let timeline = gsap.timeline({
                defaults: {
                    duration: 1.3,
                    ease: "power3.inOut"
                }
            });
            timeline.to(".image-wrap", {
                height: 550,
                backgroundSize: "105%",
                duration: 1.5,
                ease: "power4.inOut"
            }).to(".image-wrap", {
                height: 250,
                backgroundPosition: "50% 58%",
                y: '0',
            }, 1.5).from(".big-name", {
                y: getYDistance(".big-name")
            }, 1.5).from(".hide", {
                opacity: 0,
            }, 1.5)

        });

        function getYDistance(el) {
            return (window.innerHeight - document.querySelector(el).getBoundingClientRect().top)
        }

        return () => ctx.revert();
    }, [])

    const [backgroundPosition, setBackgroundPosition] = useState("50% 58%");
    const xSpeed = 0.008;
    const ySpeed = 0.02;

    useEffect(() => {
        const timer = setTimeout(() => {
            const imageWrap = document.querySelector(".image-wrap");
            if (imageWrap) {
                imageWrap.style.pointerEvents = "auto";
            }
        }, 2830);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xMoving = x - e.target.clientWidth / 2;
            const yMoving = y - e.target.clientHeight / 2;

            const newPosition = `calc(50% + ${xMoving * xSpeed}px) calc(58% + ${yMoving * ySpeed}px)`;
            setBackgroundPosition(newPosition);
        };

        const handleMouseEnter = () => {
            const imageWrap = document.querySelector(".image-wrap");
            imageWrap.style.transition = ".2s background-position";

            setTimeout(() => {
                imageWrap.style.transition = "0s background-position";
            }, 200);
        };

        const handleMouseLeave = () => {
            const imageWrap = document.querySelector(".image-wrap");
            imageWrap.style.transition = ".5s background-position";
            imageWrap.style.backgroundPosition = "50% 58%";
        };

        const imageWrap = document.querySelector(".image-wrap");
        imageWrap.addEventListener("mousemove", handleMouseMove);
        imageWrap.addEventListener("mouseenter", handleMouseEnter);
        imageWrap.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            imageWrap.removeEventListener("mousemove", handleMouseMove);
            imageWrap.removeEventListener("mouseenter", handleMouseEnter);
            imageWrap.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);


    return (
        <div className='heroWrapper'>
            <nav className='mainNav hide'>
                <img src="/img/signature.png" alt="" className='signature getHover' />
                <ul>
                    <li className="nav-link">
                        <a href="#" className='getHover'>Work<i className='bx bx-chevron-down getHover'></i></a>
                    </li>
                    <li className="nav-link">
                        <a href="#" className='getHover'>About</a>
                    </li>
                    <li className="nav-link">
                        <a href="#" className='getHover'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="image-wrap getHover" style={{ backgroundPosition: backgroundPosition }}></div>
            <h1 className='big-name getHover'>Travel<br /> <span className='getHover'>Agency</span></h1>
            <span className="scroll hide">Scroll Down</span>
            <span className="line hide"></span>
            <div className='bottom-section hide'>
                <span>
                    <i className='bx bx-map' ></i> Located in England
                </span>
                <ul className="social-media">
                    <li>
                        <a href="#">
                            <i className='bx bxl-instagram getHover' ></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxl-linkedin getHover' ></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxl-twitter getHover' ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainPage