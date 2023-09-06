import './Cursor.css'
import { useState, useEffect } from 'react';


const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setOpacity(1)
            setPosition({ x: e.clientX, y: e.clientY });

            const hovered = document.elementFromPoint(e.clientX, e.clientY);
            if (hovered && hovered.classList.contains("getHover")) {
                setIsHovered(true);
            } else {
                setIsHovered(false)
            }
        };


        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);



    return (
        <>
            <div className={`cursor cursor-circle ${isHovered ? 'biggerCircle' : ''}`} style={{ left: position.x, top: position.y, opacity: opacity }}></div>
            <div className='cursor cursor-point' style={{ left: position.x - 1, top: position.y - 1, opacity: opacity }}></div>
        </>
    )
}

export default Cursor