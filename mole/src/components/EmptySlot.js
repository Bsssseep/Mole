import { useEffect } from "react";
import MoleHill from '../imgs/MoleHill.png';

const EmptySlot = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.toggle(true);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, []); // Added an empty dependency array to ensure the effect runs only once

    return (
        <div>
            <img style={{ width: '30vw' }} src={MoleHill} alt="Mole Hill" />
        </div>
    );
}

export default EmptySlot;
