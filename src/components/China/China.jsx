import './China.css'
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const China = () => {



    let timeline = gsap.timeline();

    useLayoutEffect(() => {
        const parallaxEl = document.querySelectorAll('.parallax')

        let ctx = gsap.context(() => {
            Array.from(parallaxEl).filter(e=>!e.classList.contains('text')).forEach((e) => {
                const fromEl = e.getAttribute('data-fromdata');
                
        let timeline = gsap.timeline();
                timeline.from(e, {
                    top: `${fromEl}`,
                    duration:4,
                    ease: "power3.out"
                })
            })
            timeline.from(".text h1",{
                y: window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top,
                duration: 2,
            },
            "2")
            .from('.text h2', {
                y:-200,
                opacity: 0,
                duration:1.5,
            }, "2.5")
            .from('.hide',{
                opacity: 0,
                duration: 1.5
            }, "2.5")
            

        });

        return () => ctx.revert()
    }, [])

    const [mouseOffset, setMouseOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [clientX, setClientX] = useState()
    const [rotateDegree, setRotateDegree] = useState (0)

    useEffect(() => {
        const chinaMain = document.querySelector('.chinaMain');

        const handleMouseMove = (event) => {
            if(timeline.isActive()) return;
            const { clientX, clientY } = event;
            const boundingBox = chinaMain.getBoundingClientRect();
            const centerX = boundingBox.left + boundingBox.width / 2;
            const centerY = boundingBox.top + boundingBox.height / 2;
            const offsetX = clientX - centerX;
            const offsetY = clientY - centerY;
            let newRotateDegree = ((offsetX / (window.innerWidth/2))*20)
            setRotateDegree(newRotateDegree)
            setClientX (clientX)
            setMouseOffset({ offsetX, offsetY });
        };

        chinaMain.addEventListener('mousemove', handleMouseMove);

        return () => {
            chinaMain.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        
        parallaxElements.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation ;

            const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zValue = (clientX - parseFloat(getComputedStyle(el).left))* isInLeft * 0.1;
            el.style.transform = ` rotateY(${rotateDegree * rotateSpeed}deg) translateZ(${zValue*speedz}px) translateX(calc(-50% + ${-mouseOffset.offsetX * speedx}px)) translateY(calc(-50% + ${mouseOffset.offsetY * speedy}px))`;
        });
    }, [mouseOffset]);




    return (
        <div className='chinaWrapper'>
            <header className='chinaHeader hide'>
                <nav>
                    <img src="./img/china/logo.png" alt="" className='logo' />
                    <ul>
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Sign up</a>
                        </li>
                        <li className='search'>
                            <a href="#" className='searchA'><i className='bx bx-search' ></i></a>
                        </li>
                        <li className="hamburguer">
                            <a href="#">
                                <div className="bar"></div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='chinaMain'>
                <div className="vignette hide"></div>
                <img src="/img/china/background.png" alt="" data-fromdata="100%" data-rotation="0" data-speedx="0.3" data-speedy="0.33" data-speedz= "0" className='parallax bg-img' />
                <img src="/img/china/fog_7.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.27" data-speedy="0.32" data-speedz= "0" className='parallax fog-7' />
                <img src="/img/china/mountain_10.png" alt="" data-fromdata="180%" data-rotation="0" data-speedx="0.195" data-speedy="0.305" data-speedz= "0" className='parallax mountain-10' />
                <img src="/img/china/fog_6.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.1" data-speedy="0.28" data-speedz= "0" className='parallax fog-6' />
                <img src="/img/china/mountain_9.png" alt="" data-fromdata="200%" data-rotation="0.02" data-speedx="0.125" data-speedy="0.155" data-speedz= "0.15" className='parallax mountain-9' />
                <img src="/img/china/mountain_8.png" alt="" data-fromdata="200%" data-rotation="0.02" data-speedx="0.1" data-speedy="0.11" data-speedz= "0" className='parallax mountain-8' />
                <img src="/img/china/fog_5.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.16" data-speedy="0.105" data-speedz= "0" className='parallax fog-5' />
                <img src="/img/china/mountain_7.png" alt="" data-fromdata="200%" data-rotation="0.09" data-speedx="0.1" data-speedy="0.1" data-speedz= "0" className='parallax mountain-7' />
                <div data-rotation="0.11" data-speedx="0.07" data-speedy="0.07" data-speedz= "0" className='parallax text'>
                    <h2>China</h2>
                    <h1>Zhangjiajie</h1>
                </div>
                <img src="/img/china/mountain_6.png" alt="" data-fromdata="210%" data-rotation="0.12" data-speedx="0.065" data-speedy="0.05" data-speedz= "0.05" className='parallax mountain-6' />
                <img src="/img/china/fog_4.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.135" data-speedy="0.03" data-speedz= "0" className='parallax fog-4' />
                <img src="/img/china/mountain_5.png" alt="" data-fromdata="240%" data-rotation="0.1" data-speedx="0.07" data-speedy="0.035" data-speedz= "0.13" className='parallax mountain-5' />
                <img src="/img/china/fog_3.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.11" data-speedy="0.018" data-speedz= "0" className='parallax fog-3' />
                <img src="/img/china/mountain_4.png" alt="" data-fromdata="300%" data-rotation="0.14" data-speedx="0.059" data-speedy="0.024" data-speedz= "0.35" className='parallax mountain-4' />
                <img src="/img/china/mountain_3.png" alt="" data-fromdata="300%" data-rotation="0.05" data-speedx="0.04" data-speedy="0.018" data-speedz= "0.32" className='parallax mountain-3' />
                <img src="/img/china/fog_2.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.15" data-speedy="0.0115" data-speedz= "0" className='parallax fog-2' />
                <img src="/img/china/mountain_2.png" alt="" data-fromdata="300%" data-rotation="0.15" data-speedx="0.03" data-speedy="0.013" data-speedz= "0.42" className='parallax mountain-2' />
                <img src="/img/china/mountain_1.png" alt="" data-fromdata="300%" data-rotation="0.2" data-speedx="0.027" data-speedy="0.018" data-speedz= "0.53" className='parallax mountain-1' />
                <img src="/img/china/sun_rays.png" alt="" className='sun-rays hide' />
                <img src="/img/china/black_shadow.png" alt="" className='black-shadow hide' />
                <img src="/img/china/fog_1.png" alt="" data-fromdata="150%" data-rotation="0" data-speedx="0.12" data-speedy="0.01" data-speedz= "0" className='parallax fog-1' />
            </main>
        </div>
    )
}

export default China