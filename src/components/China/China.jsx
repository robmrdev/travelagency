import './China.css'
import { useEffect, useState } from 'react';

const China = () => {

    const [mouseOffset, setMouseOffset] = useState({ offsetX: 0, offsetY: 0 });

    useEffect(() => {
      const chinaMain = document.querySelector('.chinaMain');
  
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const boundingBox = chinaMain.getBoundingClientRect();
        const centerX = boundingBox.left + boundingBox.width / 2;
        const centerY = boundingBox.top + boundingBox.height / 2;
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;
  
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
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        
        el.style.transform = `translateX(calc(-50% + ${-mouseOffset.offsetX * speedx}px)) translateY(calc(-50% + ${mouseOffset.offsetY * speedy}px))`;
      });
    }, [mouseOffset]);







    return (
        <div className='chinaWrapper'>
            <header className='chinaHeader'>
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
                <div className="vignette"></div>
                <img src="/img/china/background.png" alt="" data-speedx="0.3" data-speedy="0.38" className='parallax bg-img' />
                <img src="/img/china/fog_7.png" alt="" data-speedx="0.27" data-speedy="0.32" className='parallax fog-7' />
                <img src="/img/china/mountain_10.png" alt="" data-speedx="0.195" data-speedy="0.305" className='parallax mountain-10' />
                <img src="/img/china/fog_6.png" alt="" data-speedx="0.25" data-speedy="0.28" className='parallax fog-6' />
                <img src="/img/china/mountain_9.png" alt="" data-speedx="0.125" data-speedy="0.155" className='parallax mountain-9' />
                <img src="/img/china/mountain_8.png" alt="" data-speedx="0.1" data-speedy="0.11" className='parallax mountain-8' />
                <img src="/img/china/fog_5.png" alt="" data-speedx="0.16" data-speedy="0.105" className='parallax fog-5' />
                <img src="/img/china/mountain_7.png" alt="" data-speedx="0.1" data-speedy="0.1" className='parallax mountain-7' />
                <div data-speedx="0.07" data-speedy="0.07" className='parallax text'>
                    <h2>China</h2>
                    <h1>Zhangjiajie</h1>
                </div>
                <img src="/img/china/mountain_6.png" alt="" data-speedx="0.065" data-speedy="0.05" className='parallax mountain-6' />
                
                <img src="/img/china/fog_4.png" alt="" data-speedx="0.135" data-speedy="0.03" className='parallax fog-4' />
                <img src="/img/china/mountain_5.png" alt="" data-speedx="0.07" data-speedy="0.035" className='parallax mountain-5' />
                
                <img src="/img/china/fog_3.png" alt="" data-speedx="0.11" data-speedy="0.018" className='parallax fog-3' />
                <img src="/img/china/mountain_4.png" alt="" data-speedx="0.059" data-speedy="0.024" className='parallax mountain-4' />
                <img src="/img/china/mountain_3.png" alt="" data-speedx="0.04" data-speedy="0.018" className='parallax mountain-3' />
                <img src="/img/china/fog_2.png" alt="" data-speedx="0.15" data-speedy="0.0115" className='parallax fog-2' />
                <img src="/img/china/mountain_2.png" alt="" data-speedx="0.0235" data-speedy="0.013" className='parallax mountain-2' />
                <img src="/img/china/mountain_1.png" alt="" data-speedx="0.027" data-speedy="0.018" className='parallax mountain-1' />
                <img src="/img/china/sun_rays.png" alt="" className='sun-rays' />
                <img src="/img/china/black_shadow.png" alt="" className='black-shadow' />
                <img src="/img/china/fog_1.png" alt="" data-speedx="0.12" data-speedy="0.01" className='parallax fog-1' />
            </main>
        </div>
    )
}

export default China